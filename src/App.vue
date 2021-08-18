<template>
  <div id="app">
    <StatusBar/>
    <PageLayout text="This is my current post" imageLink="./logo.png"/>
    <PageLayout text="and this is the second post" imageLink="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/03a203deee86e43d13f4a61ec66459b2.png.webp"/>
  </div>
</template>

<script>
import StatusBar from "./components/StatusBar";
import PageLayout from "./components/PageLayout";

export default {
  name: 'App',
  components:{
    StatusBar,
    PageLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #252525;
  flex: 1;
}
</style>
