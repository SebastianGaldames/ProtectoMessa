<template>
  <div id="app">

    <b-container class="bv-example-row">
      <b-row>
        <b-col align-self= "start">
          <div>
            <!-- aca va el logo -->
            <b-navbar variant="faded" type="light">
              <b-navbar-brand href="#">
                <img src="https://placekitten.com/g/30/30" alt="Kitten">
              </b-navbar-brand>
            </b-navbar>
          </div>
        </b-col>
        <b-col>
          <div id="nav">
            <!-- aca accesos superiores -->
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/busqueda">Buscar</router-link> |
            <router-link to="/carrito">Carrito</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>


  



    
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar';
export default {
  components:{
    NavBar
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
