<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="mb-3">
      <b-navbar-brand><router-link class="col a-link" class-active="active" to="/">CRUD APP</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link class="col a-link" class-active="active" to="/list">List</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.a-link {
  text-decoration: none;
  color: white;
}
</style>
