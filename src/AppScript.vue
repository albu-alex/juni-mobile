<script>
import StatusBar from "./components/StatusBar";
import PageLayout from "./components/PageLayout";
import Loading from "./components/Loading";
import axios from "axios";

export default {
  name: 'App',
  components:{
    StatusBar,
    PageLayout,
    Loading
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
      let postMessage = document.getElementById("addUserPost").value;
      if(postMessage === "")
        return;
      let userPost ={
        "name":{
          "title" : "Albu",
          "first" : "Alex",
          "last": postMessage,
        },
        "picture":{
          "large": "https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/03a203deee86e43d13f4a61ec66459b2.png.webp",
          "medium": "http://pngimg.com/uploads/ferrari/ferrari_PNG10680.png",
          "thumbnail": "https://i.imgur.com/cNDCQqa.jpg",
        },
        "login":{
          "username" : "owner",
          "password" : "owner"
        },
      };
      this.users = [userPost].concat(this.users);
      document.getElementById("addUserPost").value = "";
    }
  }
}
</script>