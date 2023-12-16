<template id="posts">
  <body>
    <div class="post-header">
      <div>
        <div class="firstRow">
          <img v-if="post.profilepic" :src="post.profilepic" width="50" height="50" alt="Profile picture" class="profilepic">
          <p>{{ post.createtime }}</p>
        </div>
        <p class="user">{{ post.user }}</p>
      </div>
    <div id="posts">
    <img v-if="post.image" :src="post.image" alt="Post image" class="post-image">
    <p class="post-content">{{ post.content }}</p>
    </div>
    <div class="post-interactions">
      <div class = "buttons">
        <button @click="likePost(post.id)">Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
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

.firstRow{
  display: flex;
  justify-content: space-between;
}
.firstRow p{
  font-weight: 600;
}

body {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: 35px;
    background-color: #f5e1c4;
    width: auto; 
    padding: 20px; 
    max-width: 700px;
    border-top: 15px #fff7eb solid;
    border-radius: 5%;
}

.buttons{
  display: flex;
  justify-content: space-between;
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

.likeCounter {
  margin-bottom: 0px;
  margin-left: 5px;
  font-weight: 600;
  font-size: large;
}

.profilepic {
  max-width: 50px;
  margin: 5px;
}

.user {
  font-weight: bold;
  font-size: 1.5em;
}

button{
  background-color:rgb(187, 169, 136);
  border: none;
  padding: 5px;
  width: 100px;
  font-size: 16px;
  margin: 4px 2px;
}

</style>
