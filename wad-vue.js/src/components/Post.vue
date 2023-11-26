<template id="posts">
  <body>
    <div class="post-header">
      <div>
      <img v-if="post.profilepic" :src="post.profilepic" alt="Profile picture" class="profilepic">
      <p>{{ post.createtime }}</p>
      <p class="user">{{ post.user }}</p>

    </div>
    <div id="posts">
    <img v-if="post.image" :src="post.image" alt="Post image" class="post-image">
    <p class="post-content">{{ post.content }}</p>
    </div>
    <div class="post-interactions">
      <img :src="require('@/assets/like.png')" alt="Like" class="like-button" @click="likePost(post.id)">
      <p class="likeCounter">{{ post.likes }} likes</p>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    likePost(idOfPost) {
      this.$store.dispatch('likePost', idOfPost);
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');

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

body {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: 35px;
    background-color: #f5e1c4; 
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

.like-button {
  max-width: 20px;
  padding: 5px;
}

.likeCounter {
  align-items: center;
  margin-bottom: 5px;
  margin-left: 5px;
}

.profilepic {
  max-width: 35px;
  margin: 5px;
}

.user {
  font-weight: bold;
  font-size: 1.5em;
}

</style>
