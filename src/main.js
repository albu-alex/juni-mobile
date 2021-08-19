import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
    loading: false,
  },
  mounted(){
    this.scroll();
  },
  methods:{
    scroll(){
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          setTimeout(function () {
            for (var i = 0; i < 2; i++) {
              let postsScrolled = document.querySelector("ul");
              var listElement = document.createElement("li");
              var post = document.createTextNode("HEY THERE");
              listElement.appendChild(post);
              postsScrolled.appendChild(listElement);
            }
            this.loading = false;
          }, 100);
        }
      }
    }
  }
}).$mount('#app')
