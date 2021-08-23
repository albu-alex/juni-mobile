<template>
  <div>
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
    width: 50px;
    height: 50px;
    margin: 0 10px;
    border: 3px solid black;
  }
  img#owner{
    --x: 50%;
    --y: 50%;
    display: inline-block;
    border-radius: 50%;
    width: 50px;
    height: 50px;
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