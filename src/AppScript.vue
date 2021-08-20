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
          let listElements = document.querySelectorAll("li");
          setTimeout(function () {
            for (let i = 0; i < 2; i++) {
              let postsScrolled = document.querySelector("ul");
              let listElement = document.createElement("li");
              listElement.setAttribute('id', 'post');
              new PageLayoutConstructor({
                propsData:{
                  text:"This is post number " + (listElements.length + 1),
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