import Vue from 'vue'
import App from './App.vue'
import PageLayout from './components/PageLayout'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
    loading: false,
    posts: []
  },
  mounted(){
    const postsScrolled = document.querySelector("ul");
    document.addEventListener("scroll", function (){
      if(postsScrolled.scrollTop + postsScrolled.clientHeight >= postsScrolled.scrollHeight){
        this.loadPosts();
      }
    });
    this.loadPosts();
  },
  methods:{
    loadPosts(){
      this.loading = true;
      setTimeout(function () {
        for (var i = 0; i < 2; i++) {
          this.posts.push(<PageLayout text="and this is the second post"
                                      imageLink="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/03a203deee86e43d13f4a61ec66459b2.png.webp"
                                      avatar="https://www.der-windows-papst.de/wp-content/uploads/2019/03/Windows-Change-Default-Avatar-448x400.png" username="OP_rah" />);
        }
        this.loading = false;
      }, 100);
      console.log(this.posts);
    }
  }
}).$mount('#app')
