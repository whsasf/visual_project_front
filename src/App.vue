<template>
  <div id="app">
     <appnav/>
      
       <router-view></router-view>
     
  </div>
</template>

<script>
import AppNav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    appnav: AppNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 25%;
}

.tooltip{
    color: #fff;
    font-size:18px;
    min-width:100;
    height:auto;
    position:absolute; 
    padding: 5px 10px;
    text-align:center;
    border-style:solid;
    border-width:1px;
    background-color:rgba(0,0,0,0.6);
    border-radius:5px;	
}
</style>
