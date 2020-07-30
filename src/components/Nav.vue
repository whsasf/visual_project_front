<template>
 <div>
    <div class="navbar">
      <ul >
        <li class="normali">
          <router-link to="/">当前呈现</router-link></li>
        <li class="normali">
          <router-link to="/totalvisual">累积呈现</router-link></li>
        <li class="githubclass">
         <a href="" ><svg  @click="gotogithub" class="svggithub"  title="click to get source code" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> </a>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>

.navbar-logo{
  display: block
}

@media (min-width: 500px){
.navbar ul {
    margin-top: 10px;
    display: flex;
    font-weight: bold;
    align-items: center;
    border-bottom: 1px solid #551A8B
}}

.navbar ul li {
  margin: 0 20px;
  padding: 0;
  list-style-type: none
}

.navbar ul li.githubclass{
  margin-left: auto
}
.navbar ul li a {
  display: block;
  padding: 10px 20px;
  text-decoration: none
}

.navbar ul li  a.router-link-exact-active.router-link-active, .navbar ul li.normali  a:hover, .navbar ul li.normali  a:focus{
  background-color:#551A8B;
  color: #fff;
}

.svggithub{
  margin-left: auto;
  margin-right: 10px;
}
.svggithub:hover{
  cursor: pointer;
  content: 'ddd';
}
</style>
