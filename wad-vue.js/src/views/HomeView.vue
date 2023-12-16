<template>
  <div class = "body">
    <div class="posts">
      <Post v-for="post in getPosts" :key="post.id" :post="post" />
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

.body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    margin-bottom: 35px;
    align-items: center;
}

.resetLikesButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
    padding: 20px;
    margin-bottom: 50px;
}
.resetLikesButton button{
  background-color:rgb(187, 169, 136);
  padding: 5px;
  width: 100px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transform: scale(1.3);
}

</style>
