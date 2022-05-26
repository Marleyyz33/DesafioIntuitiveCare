<template>
<div>
   <div>
    <v-toolbar
      class= "barra"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <img src="https://eretz.bio/wp-content/uploads/2020/08/Logo-Escura-03-1-1600x690.png" width="200" class="img">
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
img{
  position: center;
  display: flex;
  justify-content: center;
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
