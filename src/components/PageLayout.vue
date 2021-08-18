<template>
  <div id="post">
    <h1 class="postText">{{text}}</h1>
    <img :src="imageLink"/>
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
  #post{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  }
  .postText{
    color: #888888;
  }
</style>