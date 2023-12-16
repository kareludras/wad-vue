<template>
    <div id="app">
    <Header />
    <router-view />
    <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Post from '@/components/Post.vue';


export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Post,
  },  
};


</script>

<style>
body {
  background-color: #fff7eb;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
}
</style>
