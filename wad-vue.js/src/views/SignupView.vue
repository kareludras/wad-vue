<template>
  <div class="signUpView">
    <form class="signupBox" @submit.prevent="signUp">

      <div class="signUpHeader">
        <b>Welcome to PostIt</b>
        <p>Sign Up!</p>
      </div>

      <div class="textFields">
        <div class="email">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Email" required v-model="email" @input="checkFields" />
        </div>

        <div class="password">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" required v-model="password" @input="checkFields" />
        </div>
      </div>

      <div class="signUp">
        <button class="signUpButton" :disabled="!areFieldsValid" @click="SignUp">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      areFieldsValid: false,

      isPasswordLengthValid: false,
      isEmailLengthValid: false,
    };
  },
  methods: {
    SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
    checkFields() {
      this.isPasswordLengthValid = this.password.length > 0;
      this.isEmailLengthValid = this.email.length > 0;
      
      this.areFieldsValid = this.isPasswordLengthValid && this.isEmailLengthValid;
  
    },
  },
};
</script>


<style scoped>

.signUpView{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center; 
    min-width: 320px;
    min-height: 70vh;
    width: auto;
    flex: 1 0 auto;
}
.signupBox{

    justify-content: space-around; 
    padding: 20px;
    background-color: #f5e1c4; 
    border: 1px solid #99620f; 
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5%;
    align-items: left;
    font-size: 21px;
    flex: 1;


    width: 100%;
    height: 100%;

    max-width: 40vw;
    min-width: 280px;

    min-height: 270px;
    max-height: 4vh;
}
.signupBox a{
    text-decoration: none;
    font-size: 21px;
}
.signupBox a:hover{
    text-decoration: underline;
    color: #1c4e94;
}

.password, .email{
  justify-content: space-around;
  align-items: center;
  display:flex;
  width: 30vw;
  min-width: 260px;
}

label{
  margin-right: 30%;
  width: 5px;
}

.signUpHeader{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
}
.signUpHeader b{
    font-size: 26px;
}
.textFields{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 0px auto;
    margin-top: -15px;
}
.textFields input{
    width: 100%;
    padding: 6px;
    font-size: 16px;
}

.signUp{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
}

.signUpButton{
    background-color:#b6d0de;
    width: 75px;
    transform: scale(1.3);
    z-index: 1;
}

.signUp a{
    margin-top: 1vh;
}
</style>