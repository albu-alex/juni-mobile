<template>
  <div>
    <h1 class="postText">{{text}}</h1>
    <img :src="imageLink" width="10%" height="10%"/>
  </div>
</template>


<script>
export default {
  props: {
    text: String,
    imageLink: String
  },
  name: "PageLayout"
}
</script>

<style>
  .postText{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: #888888;
    font-size: 3vw;
  }
</style>