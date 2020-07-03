<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container">
      <router-link to="/"><a class="navbar-brand">Mofed</a></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" >
            <router-link to="/login">
              <a class="nav-link btn btn-primary mt-2 mr-2">Login</a>
            </router-link>
          </li>
          <li class="nav-item" >
            <router-link to="register">
              <a class="nav-link mt-2 btn btn-success">Register</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
a {
  color: #000;
}

a.navbar-brand {
  color: aqua;
  padding: 0;
  font-size: 40px;
}
</style>
