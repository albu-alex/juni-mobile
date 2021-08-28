<!--Component is only shown in mobile version-->
<!--Replaces the standard iOS status bar with a black one-->
<template>
  <div id="statusbar"></div>
</template>

<script>
export default {
  name: "StatusBar"
}
</script>

<style scoped>
  #statusbar{
    height: 20px;
    color: black;
  }
</style>