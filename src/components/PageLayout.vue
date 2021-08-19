<template>
  <div>
    <UserDetails :avatar="avatar" :username="username"/>
    <h1 class="postText">{{text}}</h1>
    <img :src="imageLink" width="100%" height=auto />
    <Feedback counter=0 isLikeClicked="false" isDislikeClicked="false" />
  </div>
</template>


<script>
import Feedback from "@/components/Feedback";
import UserDetails from "@/components/UserDetails";
export default {
  components: {Feedback, UserDetails},
  props: {
    text: String,
    imageLink: String,
    avatar: String,
    username: String
  },
  name: "PageLayout"
}
</script>

<style scoped>
  .postText{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: #888888;
    font-size: 3vw;
  }
</style>