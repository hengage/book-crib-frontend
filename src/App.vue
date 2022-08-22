<template>
  <nav>
    <h1>Book Crib</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/authors">Authors</router-link>

    <p>Are you an author and want your book to be seen? then &nbsp; 
      <router-link :to="{ name: 'signup' }"><span> sign up</span></router-link>
    </p>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgba(128, 118, 85, 0.2);
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

nav span {
  background-color: green;
  color: white;
  font-size: 1.3em;
  border-radius: 0.4em;
  margin-top: 1em;
  padding: 0.34em 0.4em;
  display: block;
}

ul {
  list-style-type: none;
}

ul a {
  text-decoration: none;
}


.author-form {
  /* background-color: antiquewhite; */
  width: 99%;
  text-align: center;
}

.author-form .container {
  margin: 1em;
}

.author-form label {
  display: block;
  margin-bottom: 0.5em;
}

.author-form input {
  display: bloc;
  width: 90%;
  padding: 12px;
  border-radius: 0.5em;
  border: none;
  background-color: white;
}

.author-form button {
  /* display: block; */
  background-color: green;
  color: white;
  font-size: 1.6em;
  border-radius: 0.4em;
  margin-top: 1em;
  padding: 0.44em 1.0em;
}

@media screen and (min-width:707px) {


  form {
    width: 60%
  }

  .author-form input {
    width: 50%;
  }

  .author-form button {
    /* display: block; */
    background-color: green;
    color: white;
    font-size: 1.6em;
    border-radius: 0.4em;
    margin-top: 1em;
    cursor: pointer;
  }

  
}

@media screen and (min-width:600px) {
  nav span {
    display: inline;
  }
}
</style>
