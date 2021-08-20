<script>
export default {
  name: "Feedback",
  props:{
    counter: Number,
    isLikeClicked: Boolean,
    isDislikeClicked: Boolean
  },
  methods:{
    increase: function(){
      if(this.isLikeClicked)
        this.counter++;
      else
        this.counter--;
      this.isLikeClicked = !this.isLikeClicked;
      return this.counter;
    },
    decrease: function(){
      if(this.isDislikeClicked)
        this.counter--;
      else
        this.counter++;
      this.isDislikeClicked = !this.isDislikeClicked;
      return this.counter;
    }
  }
}
</script>