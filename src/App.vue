<template>
  <nav>
    <h1>Book Crib</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/authors">Authors</router-link>

    <p>Are you an author and want your book to be seen? then 
      <router-link :to="{name: 'signup'}">sIgn up</router-link>
    </p>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

ul {
      list-style-type: none;
    }

ul a{
  text-decoration: none;
}
</style>
