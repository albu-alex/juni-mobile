<template>
  <div>
    <button v-on:click="increase" :disabled="isDislikeClicked" id="like-button"/>
    <button v-on:click="decrease" :disabled="isLikeClicked" id="dislike-button"/>
    <p>{{counter}}</p>
  </div>
</template>

<script src="./FeedbackScript.vue"/>

<style scoped>
button{
  display: inline-block;
  height: 50px;
  width: 50px;
  padding: 0;
  margin: 0 60px;
}
button:disabled{
  cursor: not-allowed;
  opacity: 0.5;
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
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>