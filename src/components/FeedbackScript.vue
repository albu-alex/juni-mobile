<script>
export default {
  name: "Feedback",
  // counter: The difference between likes and dislikes; is supposed to be 0 in the beginning
  // isDislikeClicked: Boolean; if false, dislike is enabled, otherwise it's disabled
  // isLikeClicked: Boolean; if false, like is enabled, otherwise it's disabled
  props:{
    counter: Number,
    isLikeClicked: Boolean,
    isDislikeClicked: Boolean
  },
  methods:{
    increase: function(){
      // Lets the user to like a post; counter is increased with 1/user
      if(!this.isLikeClicked)
        this.counter++;
      else
        this.counter--;
      this.isLikeClicked = !this.isLikeClicked;
      return this.counter;
    },
    decrease: function(){
      // Lets the user to dislike a post; counter is decreased with 1/user
      if(!this.isDislikeClicked)
        this.counter--;
      else
        this.counter++;
      this.isDislikeClicked = !this.isDislikeClicked;
      return this.counter;
    }
  }
}
</script>