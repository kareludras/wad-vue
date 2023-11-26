<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <span>|</span>
        <router-link to="/addPost">Add Post</router-link>
      </nav>

      <figure class="headerImage">
        
      </figure>

      <div class="dropdownContent">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <router-link to="/logout">Logout</router-link>
      </div>
    </header>

    <section>
      <div id="posts-container">
      <!-- Posts go here -->
      </div>
      
    </section>
    <!-- Post import -->
    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john.doe@ut.ee',
      },
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');

/* Add your styles from indexStyle.css and style.css here */
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
    background-color: #f5e1c4;  
    display: flex; 
    flex-direction: column; 
    max-width: 700px;
    border-top: 15px #fff7eb solid;
    border-radius: 5%;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    margin-bottom: 35px;
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

</style>
