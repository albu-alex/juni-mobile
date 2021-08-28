<!--This component holds the information of an user which is displayed above the post that the user wrote-->
<template>
  <div>
<!--    avatar: The link which directs to the avatar of an user-->
<!--    isOwner: Holds the password of a certain user and if the password is "owner", then the user is the owner-->
<!--    username: The username of an user-->
    <img :src="avatar" :id="isOwner" />
    <h1>{{username}}</h1>
  </div>
</template>

<script src="./UserDetailsScript.vue"/>

<style scoped>
  div{
    alignment: left;
    align-content: space-evenly;
  }
  img{
    display: inline-block;
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    margin: 0 10px;
    border: 3px solid black;
  }
  /*Custom border for the owner*/
  img#owner{
    --x: 50%;
    --y: 50%;
    display: inline-block;
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    margin: 0 10px;
    border: 3px solid transparent;
    background: linear-gradient(#000, #000) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), red, blue) border-box;
  }
  h1{
    display: inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 3vw;
    font-weight: 150;
    color: #AAAAAA;
    vertical-align: 150%;
  }
</style>