<template>
    <div class="addPostBody">
        <div class="addPostBox">
            <div class="postBody">
                <p>Post body</p>
                <textarea class="textField" v-model="text" @input="checkFields"></textarea>
            </div>

            <div class="createPost">
                <button class="createPostButton" @click="addPost">Create post</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            isTextValid: false,
        };
    },
    methods: {
      addPost() {
        var data = {text: this.text};
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/addpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          //credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((data) => {
      console.log(data);
      location.assign("/");
      })
      .catch((e) => {
        console.log(e.message);
        console.log("error");
      });
    },
    checkFields() {
      this.isTextValid = this.text.trim().length > 0;
    },
  },
};
</script>

<style scoped>

.addPostBody{
    display: flex; 
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    min-width: 320px;
    min-height: 0px;
    width: auto;
    flex: 1 0 auto;
}

.addPostBox{
    justify-content: space-around; 
    padding: 20px; 
    background-color: #f5e1c4; 
    border: 1px solid #99620f; 
    display: flex;
    flex-direction: column;
    border-radius: 5%;
    align-items: left;
    font-size: 17px;
    flex: 1;

    width: 100%;
    height: 100%;

    max-width: 50vw;
    min-width: 250px;

    min-height: 200px;
    max-height: 40vh;

    margin-bottom: 40px;
}

.addPostBox > .postBody{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.textField{
    resize: none;
    flex: 1;
    margin: 0 auto;
    width: 70%;
    max-width: 70%;
    min-height: 100px;
    height: 30vh;

    box-sizing: border-box;
}

.createPost {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.createPost > .createPostButton{
    background-color:#b6d0de;
    transform: scale(1.3);
}

</style>