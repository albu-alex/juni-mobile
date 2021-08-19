<template>
  <div id="app">
    <StatusBar/>
    <ul>
    <li><PageLayout text="This is my current post" imageLink="https://i.pinimg.com/originals/8a/8f/07/8a8f07c4c49a56b8b05fb5f3b9768ec1.gif"
                    avatar="https://www.blexar.com/avatar.png" username="shaquille.oatmeal" /></li>
    <li><PageLayout text="and this is the second post"
                imageLink="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/03a203deee86e43d13f4a61ec66459b2.png.webp"
                    avatar="https://www.der-windows-papst.de/wp-content/uploads/2019/03/Windows-Change-Default-Avatar-448x400.png"
                    username="OP_rah" /></li>
    </ul>
  </div>
</template>

<script>
import StatusBar from "./components/StatusBar";
import Vue from 'vue';
import PageLayout from "./components/PageLayout";

export default {
  name: 'App',
  components:{
    StatusBar,
    PageLayout
  },
  mounted(){
    this.scroll();
  },
  methods:{
    scroll(){
      window.onscroll = () => {
        const PageLayoutConstructor = Vue.extend(PageLayout);
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          setTimeout(function () {
            for (let i = 0; i < 2; i++) {
              let postsScrolled = document.querySelector("ul");
              let listElement = document.createElement("li");
              listElement.setAttribute('id', 'post');
              new PageLayoutConstructor({
                propsData:{
                  text:"and this is the second post",
                  imageLink:"https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/03a203deee86e43d13f4a61ec66459b2.png.webp",
                  avatar:"https://www.der-windows-papst.de/wp-content/uploads/2019/03/Windows-Change-Default-Avatar-448x400.png",
                  username:"OP_rah"
                }
              }).$mount('#post');
              postsScrolled.appendChild(listElement);
            }
          }, 100);
        }
      }
    }
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
ul{
  list-style-type: none;
  margin-left: 0;
  padding: 0;
}
</style>
