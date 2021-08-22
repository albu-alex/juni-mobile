<template>
  <div id="app">
    <StatusBar/>
    <ul>
    <li v-for="user in users" :key="user"><PageLayout :text="user.name.title + ' ' + user.name.first + ' ' + user.name.last" :imageLink="[user.picture.large, user.picture.medium]"
                    :avatar=user.picture.thumbnail :username=user.login.username /></li>
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
</style>
