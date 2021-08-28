<!--PageLayout component describes the entire post of a certain user-->
<!--PageLayout component uses two other components: Feedback and UserDetails-->
<template>
  <div>
<!--    avatar: The link which directs to the avatar of an user-->
<!--    isOwner: Holds the password of a certain user and if the password is "owner", then the user is the owner-->
<!--    username: The username of an user-->
<!--    text: The text of the post-->
<!--    counter: The difference between likes and dislikes; is supposed to be 0 in the beginning-->
<!--    isLikeClicked & isDislikeClicked: are supposed to be false in the beginning-->
<!--    imageLink: an array with all the image URLs that the user wants to add to it's post-->
    <UserDetails :avatar="avatar" :username="username" :isOwner="isOwner" />
    <h1 class="postText">{{text}}</h1>
    <img v-for="image in imageLink" :key="image" :src="image" width="100%" height=auto />
    <Feedback :counter=0 :isLikeClicked=false :isDislikeClicked=false />
  </div>
</template>


<script src="./PageLayoutScript.vue"/>

<style scoped>
  .postText{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: #888888;
    font-size: 5vw;
  }
  div{
    margin-bottom: 50px;
  }
</style>