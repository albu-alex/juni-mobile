<script>
import StatusBar from "./components/StatusBar";
import Vue from 'vue';
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
  mounted(){
    this.scroll();
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
    scroll(){
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
            axios.get(`https://randomuser.me/api/?results=2`).then(response => {
              for(let i=0;i<response.data.results.length;i++)
                this.users.push(response.data.results[i]);
          });
        }
      }
    }
  }
}
</script>