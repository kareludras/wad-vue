<template id="posts">
  <body>
    <div class="post-header">
      <div class="firstRow">
        <img v-if="post.profilepic" :src="post.profilepic" width="50" height="50" alt="Profile picture" class="profilepic">
        <div class="post-info">
          <p class="createtime">{{ post.createtime }}</p>
        </div>
      </div>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
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
    
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');

.firstRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.firstRow p {
  font-weight: 600;
}

body {
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 35px;
  margin-top: 15px;
  background-color: #f5e1c4;
  width: auto;
  padding: 20px;
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

