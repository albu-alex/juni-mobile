<!--Component is shown when the page is loading-->
<!--Consists of loading animation-->
<template>
  <div class="loader">
    <div class="ball1"></div>
    <div class="ball2"></div>
    <div class="ball3"></div>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
body{
  background-color: #252525;
}

.loader  {
  margin:auto;
  display:inline-block;
  height:300px;
  width:300px;
  display:flex;
  align-items:center;
  justify-content:space-around;
}

.ball1 {
  background:lightgray;
  min-height:4vw;
  min-width:4vw;
  border-radius:50%;
  animation: bounce 1s alternate infinite ease-in-out,
  flash 3s alternate infinite ease-in-out;
}
.ball2 {
  background:lightgray;
  min-height:4vw;
  min-width:4vw;
  border-radius:50%;
  animation: bounce 1s .333s alternate infinite ease-in-out,
  flash 3s 1s alternate infinite ease-in-out;
}
.ball3 {
  background:lightgray;
  min-height:4vw;
  min-width:4vw;
  border-radius:50%;
  animation: bounce 1s .666s alternate infinite ease-in-out,
  flash 3s 2s alternate infinite ease-in-out;
}

@keyframes bounce {
  from{
    position:relative;
    top:-10vh;
  }
  to{
    position:relative;
    top:10vh;
  }
}

@keyframes flash{
  from{
    background:#fff;
  }
  to{
    background:#444;
  }
}
</style>