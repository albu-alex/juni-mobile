<template>
  <div>
    <textarea id="addUserPost" v-model="message" placeholder="What are you thinking about?" v-on:keydown.enter.prevent="getUserInput" />
  </div>
</template>

<script src="./UserInputScript.vue"/>

<style scoped>
textarea{
  background-color: #252525;
  color: #AAAAAA;
  width: 75%;
  height: 20%;
  resize: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 2vw;
}
button{
  background-color: #252525;
  color: #AAAAAA;
  border-radius: 4px;
}
</style>
