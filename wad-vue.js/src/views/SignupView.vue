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
        <button class="signUpButton" type="submit" :disabled="!isPasswordValid">Sign Up</button>
      </div>
    </form>
    <div class="errors">
      <div v-if="!isLengthValid">Password should be between 8 and 15 characters.</div>
      <div v-if="!isUpperCaseValid">Password should contain at least one uppercase character.</div>
      <div v-if="!isTwoLowerCaseValid">Password should contain at least two lowercase characters.</div>
      <div v-if="!isNumberValid">Password should contain at least one numeric character.</div>
      <div v-if="!isStartUpperCaseValid">Password should start with an uppercase character.</div>
      <div v-if="!includesUnderscore">Password should include an underscore.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isPasswordValid: false,

      isLengthValid: false,
      isUpperCaseValid: false,
      isTwoLowerCaseValid: false,
      isNumberValid: false,
      isStartUpperCaseValid: false,
      includesUnderscore: false,
    };
  },
  methods: {
    signUp() {
      if (this.isPasswordValid) {
        this.$router.push("/");
      }
    },
    checkFields() {
      this.isLengthValid = this.password.length >= 8 && this.password.length < 15;
      this.isUpperCaseValid = /[A-Z]/.test(this.password);
      this.isTwoLowerCaseValid = /[a-z].*[a-z]/.test(this.password);
      this.isNumberValid = /\d/.test(this.password);
      this.isStartUpperCaseValid = /^[A-Z]/.test(this.password);
      this.includesUnderscore = this.password.includes('_');
      
      
      this.isPasswordValid =
        this.isLengthValid &&
        this.isUpperCaseValid &&
        this.isTwoLowerCaseValid &&
        this.isNumberValid &&
        this.isStartUpperCaseValid &&
        this.includesUnderscore;
    },
  },
};
</script>


<style scoped>
.errors {
  height: fit-content;       /* 23VH for vana*/
  color: red;
  text-align: center;
  padding-bottom:45px;
}
.errors div{
  margin-top:7px;
  font-weight: bold;
}

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