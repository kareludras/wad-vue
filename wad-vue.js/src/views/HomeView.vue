<template>
  <div class = "body">
    <div class="section">
       <div class="posts">
            <Post v-for="post in getPosts" :key="post.id" :post="post" />
        </div>
    </div>
  </div>
  <div class="resetLikesButton">
    <button @click="resetLikes">Reset likes</button>
        </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Post from '@/components/Post.vue';

export default {
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
  
}
</script>


<style scoped>
section {
    display: flex; 
    justify-content: space-around; 
    min-height: 400px; 
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    
    
    
}

.posts {
    width: auto; 
    padding: 20px; 
    
    display: flex; 
    flex-direction: column; 
    max-width: 700px;
    border-top: 15px #fff7eb solid;
    border-radius: 5%;
}

.body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    margin-bottom: 35px;
    align-items: center;
    
}

.post-header-actions {
    display: flex;
    max-width: 50px; 
}

.post-image {
    display: flex;
    min-width: 320px;
    max-width: 330px;
}

.post-content {
    display: flex;
    max-width: 330px;
    
    
}

.post-image ~ .post-content {
    -webkit-text-size-adjust: auto;
    font-family: 'Young Serif', serif;
}

.resetLikesButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
    padding: 20px;
    margin-bottom: 30px;
}


.resetLikes {
    align-items: center;
}

</style>
