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
          <input type="text" id="email" name="email" placeholder="Email" v-model="email" @input="checkFields" />
        </div>

        <div class="password">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" v-model="password" @input="checkFields" />
        </div>
      </div>

      <div class="signUp">
        <button class="signUpButton" type="submit" :disabled="!areFieldsValid">Sign Up</button>
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
    signUp() {
      if (this.isPasswordValid) {
        this.$router.push("/");
      }
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