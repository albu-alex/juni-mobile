<template>
  <div>
    <button v-on:click="increase" id="like-button"/>
    <button v-on:click="decrease" id="dislike-button"/>
    <p>{{counter}}</p>
  </div>
</template>

<script>

export default {
  name: "Feedback",
  props:{
    counter: Number
  },
  methods:{
    increase: function(){
      return this.counter++;
    },
    decrease: function(){
      return this.counter--;
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
  margin: 0 60px;
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
  display: inline-block;
}
p{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: #888888;
  font-size: 3vw;
  display: inline-block;
  margin: 0 60px;
}
</style>