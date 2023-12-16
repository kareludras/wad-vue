<template>
  <div class = "body">
    <button class="Buttons" v-if = "authResult" @click="Logout">Log Out</button>
    <div class="posts">
      <Post v-for="post in getPosts" :key="post.id" :post="post" />
    </div>
  </div>
  <div class="buttonsField">
    <router-link to="/addpost" class="Buttons">Add Post</router-link>
    <button class="Buttons">Delete All</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
  computed: {
    ...mapGetters(['getPosts']) 
  },
  methods: {
    ...mapActions(['resetLikes']) 
  },

  Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },

    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
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

</style>
