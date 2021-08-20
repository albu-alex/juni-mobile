<template>
  <div>
    <img :src="avatar"/>
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
  }
  h1{
    display: inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 2vw;
    font-weight: 150;
    color: #AAAAAA;
    vertical-align: top;
  }
</style>