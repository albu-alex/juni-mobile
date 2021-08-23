<template>
  <div id="app">
    <StatusBar/>
    <textarea id="addUserPost" placeholder="What are you thinking about?" v-on:keydown.enter.prevent="addNewPost"/>
    <button v-on:click="addNewPost">Add your post</button>
    <ul>
      <li v-for="user in users" :key=user.id><PageLayout :text="user.name.title + ' ' + user.name.first + ' ' + user.name.last" :imageLink="[user.picture.large, user.picture.medium]"
                      :avatar=user.picture.thumbnail :username=user.login.username :isOwner=user.login.password /></li>
    </ul>
    <Loading/>
  </div>
</template>

<script src="./AppScript.vue"/>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  flex: 1;
}
ul{
  list-style-type: none;
  margin-left: 0;
  padding: 0;
}
button{
  background-color: #252525;
  color: #AAAAAA;
  border-radius: 4px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
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
</style>
