<template>
  <div>
    <button @click="increase" id="like-button"/>
    <button id="dislike-button"/>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  methods:{
   increase(){
    return this.counter++;
   }
  }
}
</script>

<style scoped>
button{
  display: inline-block;
  height: 50px;
  width: 50px;
  padding: 0;
  margin: 0 30px;
}
#like-button{
  background-image: url("https://i.imgur.com/iWLV58H.png");
  background-color: #252525;
}
#dislike-button{
  background-image: url("https://i.imgur.com/alFEC9X.png");
  background-color: #252525;
}
div{
  align-content: space-evenly;
}
</style>