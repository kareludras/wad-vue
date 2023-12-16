<template>
    <div class="loginView">
      <form class="loginBox" @submit.prevent="logIn">
  
        <div class="loginHeader">
          <b>Welcome to PostIt</b>
          <p>Log in!</p>
        </div>
  
        <div class="textFields">
          <div class="email">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Email" v-model="email" />
          </div>
  
          <div class="password">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" v-model="password" />
          </div>
        </div>
  
        <div class="logIn">
          <button class="button" type="submit">Log in</button>
          <p>or</p>
          <router-link to="/signup" class="nav-link">Sign up</router-link>
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
      };
    },
    methods: {
      logIn() {
        if (this.isPasswordValid) {   // TODO NEED TO CHANGE FOR ACTUAL FUNCTIONALITY
          this.$router.push("/");
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  
  .loginView{
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center; 
      min-width: 320px;
      min-height: 70vh;
      width: auto;
      flex: 1 0 auto;
  }
  .loginBox{
  
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
  .loginBox a{
      text-decoration: none;
      font-size: 21px;
  }
  .loginBox a:hover{
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
  
  .loginHeader{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10px;
  }
  .loginHeader b{
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
  
  .logIn{
      display: flex;
      align-items:center;
      justify-content: space-evenly;
      flex-direction: row;
      margin-top: 10px;
      padding-right: 5vw;
      padding-left: 5vw;
  }

  .nav-link{
    padding-bottom: 7px;
  }
  
  .button{
      background-color:#b6d0de;
      width: 75px;
      transform: scale(1.3);
      z-index: 1;
  }
  
  .logIn a{
      margin-top: 1vh;
  }
  </style>