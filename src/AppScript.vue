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
      //An array which holds all the users retrieved from randomuser.me
      // For documentation, check randomuser.me
      users: []
    }
  },
  created(){
    //this part of the script is used to determine when an user wants to use the pull to refresh functionality
    let pStart = {x: 0, y:0};
    let pStop = {x:0, y:0};
    function swipeStart(event) {
      if (typeof event['targetTouches'] !== "undefined"){
        let touch = event.targetTouches[0];
        pStart.x = touch.screenX;
        pStart.y = touch.screenY;
      } else {
        pStart.x = event.screenX;
        pStart.y = event.screenY;
      }
    }
    function swipeEnd(event){
      if (typeof event['changedTouches'] !== "undefined"){
        let touch = event.changedTouches[0];
        pStop.x = touch.screenX;
        pStop.y = touch.screenY;
      } else {
        pStop.x = event.screenX;
        pStop.y = event.screenY;
      }

      swipeCheck();
    }
    function swipeCheck(){
      let changeY = pStart.y - pStop.y;
      let changeX = pStart.x - pStop.x;
      if (isPullDown(changeY, changeX) ) {
        window.location.reload();
      }
    }
    function isPullDown(dY, dX) {
      return dY < 0 && (
          (Math.abs(dX) <= 100 && Math.abs(dY) >= 200)
          || (Math.abs(dX)/Math.abs(dY) <= 0.3 && dY >= 30)
      );
    }
    document.addEventListener('touchstart', function(event){ swipeStart(event); }, false);
    document.addEventListener('touchend', function(event){ swipeEnd(event); }, false);
  },
  async mounted(){
    await this.scroll();
  },
  async beforeMount(){
    await this.getInitialUsers();
  },
  methods:{
    async getInitialUsers(){
      //Gets the first 3 users that are shown to the user when the page first loads
      await axios.get(`https://randomuser.me/api/?results=3`).then((response) => {
        this.users = response.data.results;
      });
    },
    async scroll(){
      //Adds 2 users on user scroll down; is used to create the infinite scrolling effect
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
      //function is called when the user wants to add a new post
      let postMessage = document.getElementById("addUserPost").value;
      if(postMessage === "")
        return;
      let photoLink = prompt("", "Enter the link of your photo");
      if(photoLink === null)
        photoLink = "https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/03a203deee86e43d13f4a61ec66459b2.png.webp";
      if(photoLink === "Enter the link of your photo")
        photoLink = "";
      let userPost ={
        "name":{
          "title" : "Albu",
          "first" : "Alex",
          "last": postMessage,
        },
        "picture":{
          "large": photoLink,
          "medium": "",
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