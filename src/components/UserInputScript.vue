<script>
export default{
  name: "UserInput",
  data(){
    return{
      message: "",
    }
  },
  methods:{
    getUserInput(){
      let input = document.getElementById("addUserPost");
      if(input.value === "")
        return;
      this.message = input.value;
      return this.message;
    }
  }
}
</script>