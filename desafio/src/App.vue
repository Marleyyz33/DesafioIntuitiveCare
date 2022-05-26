<template>
<div>
   <div>
    <v-toolbar
      class= "barra"
      style="
      justify-content: center;
      display: flex;"
    >
      <img class="img-toolbar" src="https://eretz.bio/wp-content/uploads/2020/08/Logo-Escura-03-1-1600x690.png">

      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/OperadoraView">Operadora</router-link>
    </nav>
    <router-view/>
  </div>
 
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.img-toolbar{
  width:250px;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
