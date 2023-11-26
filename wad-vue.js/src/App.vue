<template>
    <div id="app">
    <Header />
    <Footer />
    <router-view />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Footer,
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
