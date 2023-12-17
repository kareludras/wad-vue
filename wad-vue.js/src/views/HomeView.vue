<template>
  <div class = "body">
    <button class="Buttons" v-if = "authResult" @click="Logout">Log Out</button>
    <div class="posts">

    </div>
    <div class="post-list" v-for="post in posts"   :key="post.index">
      <div class="post">
        <div class="post-header">
          <div class="firstRow">
            <img  src="https://github.com/M1ngiii/WAD-homework/blob/main/root/src/img/default-photo.png?raw=true" width="50" height="50" alt="Profile picture" class="profilepic">
            <div class="post-info">
              <p class="createtime">{{ post.date }}</p>
            </div>
          </div>
        </div>
        <div class="post-content">
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="buttonsField">
    <router-link to="/addpost" class="Buttons">Add Post</router-link>
    <button class="Buttons" @click="DeleteAll">Delete All</button>
  </div>
</template>


<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Post from '@/components/Post.vue';
import auth from "../auth";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    Post
  },
    data: function() {
      return {
        posts: [ ],
        authResult: auth.authenticated()
      }
    },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          this.$router.push("/login");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    },
    DeleteAll() {
      try {
        fetch('http://localhost:3000/auth/deleteall', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('All posts deleted successfully');
        location.assign("/");
      } catch (error) {
        console.error('Error occurred when deleting posts:', error.message);
      }
    },
  },
    mounted() {
        fetch('http://localhost:3000/auth/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }

};
</script>


<style scoped>

.body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    margin-bottom: 35px;
    align-items: center;
}
.body button{
  margin-top: 15px;
  margin-bottom: 5px;
}

.buttonsField {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;

    margin-top: -50px;
    padding: 20px;
    margin-bottom: 50px;
}

button{
    border: none;
    font: inherit;
    cursor: pointer;
}

.Buttons{
  display: inline-block;
  background-color:rgb(187, 169, 136);

  border-radius: 5px;
  padding: 10px 15px;
  width: 130px;


  margin: 4px 35px;

  text-align: center;
  font-size: 16px;
  transform: scale(1.3);
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.Buttons:hover {
  background-color: rgb(187, 160, 111);
}

.firstRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.firstRow p {
  font-weight: 600;
}

.post {
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 35px;
  margin-top: 15px;
  background-color: #f5e1c4;
  width: auto;
  padding: 20px;
  min-width:330px;
  max-width: 700px;
  border-radius: 15%;
}

.post-header {
  margin-bottom: 10px;
}

.post-content {
  display: flex;
  max-width: 100%;
  word-break: break-word;
  font-size: 18px;
}

.profilepic {
  max-width: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

.createtime {
  font-weight: 600;
  margin: 0;
}

</style>
