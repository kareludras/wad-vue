<template>
    <div class="aPostBody">
        <div class="aPostBox">
            <div class="postBody" @click="">
                <p>Post body</p>
                <textarea class="textField" required v-model="text" @input="checkFields"></textarea>
            </div>

            <div class="ButtonField">
                <button class="Button" @click="">Update</button>
                <button class="Button" @click="deletePost">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            text: '',
            isTextValid: false,
        };
    },
    methods: {
    fetchPost(id) {
        fetch(`http://localhost:3000/auth/posts/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch post. Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            this.text = data.body;
        })
        .catch((err) => {
            console.error(`Error fetching post: ${err.message}`);
        });
    },



    updatePost() {

    },
    deletePost() {
        fetch(`http://localhost:3000/auth/posts/${this.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            this.$router.push("/");
            console.log("Successfully deleted")
          })
          .catch((error) => {
            console.log(error.message);
          });
    },
    checkFields() {
      this.isTextValid = this.text.trim().length > 0;
    },
  },
  mounted() {
  this.id = this.$route.params.id;
  this.fetchPost(this.id);
},
};
</script>

<style scoped>

.aPostBody{
    display: flex; 
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    min-width: 320px;
    min-height: 0px;
    width: auto;
    flex: 1 0 auto;
}

.aPostBox{
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

.aPostBox > .postBody{
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

.ButtonField {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;

    margin-top: -50px;
    padding: 20px;
    margin-bottom: 50px;
}
.Button{
    background-color:#b6d0de;
    transform: scale(1.3);
}

</style>