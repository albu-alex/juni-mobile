<script>
import StatusBar from "./components/StatusBar";
import PageLayout from "./components/PageLayout";
import Loading from "./components/Loading";
import Vue from 'vue';
import UserInput from "./components/UserInput"
import axios from "axios";

export default {
  name: 'App',
  components:{
    StatusBar,
    PageLayout,
    Loading,
    UserInput
  },
  data(){
    return{
      users: []
    }
  },
  async mounted(){
    await this.scroll();
  },
  async beforeMount(){
    await this.getInitialUsers();
  },
  methods:{
    async getInitialUsers(){
      await axios.get(`https://randomuser.me/api/?results=3`).then((response) => {
        this.users = response.data.results;
      });
    },
    async scroll(){
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
            axios.get(`https://randomuser.me/api/?results=2`).then(response => {
              for(let i=0;i<response.data.results.length;i++)
                this.users.push(response.data.results[i]);
          });
        }
      }
    },
    addNewPost(){
      let listElements = document.querySelectorAll("li");
      const PageLayoutConstructor = Vue.extend(PageLayout);
      let postsScrolled = document.querySelector("ul");
      let listElement = document.createElement("li");
      let elementID = "post" + (listElements.length+1);
      listElement.setAttribute('id', elementID);
      let postMessage = document.getElementById("addUserPost");
      new PageLayoutConstructor({
        propsData:{
          text:postMessage.value,
          imageLink:["https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/03a203deee86e43d13f4a61ec66459b2.png.webp"],
          avatar:"https://www.der-windows-papst.de/wp-content/uploads/2019/03/Windows-Change-Default-Avatar-448x400.png",
          username:"owner"
        }
      }).$mount('#post');
      postsScrolled.insertBefore(listElement, postsScrolled.firstChild);
    }
  }
}
</script>