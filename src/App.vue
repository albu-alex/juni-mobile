<template>
  <div id="app">
    <StatusBar/>
    <PageLayout text="This is my current post" imageLink="https://i.pinimg.com/originals/8a/8f/07/8a8f07c4c49a56b8b05fb5f3b9768ec1.gif"
                avatar="https://www.blexar.com/avatar.png" username="shaquille.oatmeal" />
    <PageLayout text="and this is the second post"
                imageLink="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/03a203deee86e43d13f4a61ec66459b2.png.webp"
                avatar="https://www.der-windows-papst.de/wp-content/uploads/2019/03/Windows-Change-Default-Avatar-448x400.png" username="OP_rah" />
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
  text-align: center;
  flex: 1;
}
</style>
