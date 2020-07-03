<template>
  <div class="nav">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 p-0">
          <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <router-link to="/homeafterlogin"
              ><a class="navbar-brand ml-4">Mofed</a></router-link
            >
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
              <ul class="navbar-nav ml-auto mr-4">
                <li class="nav-item">
                  <router-link to="/homeafterlogin/users">
                    <a class="resources nav-link">Users</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/homeafterlogin/resources">
                    <a class="resources nav-link mr-2">Resources</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a v-on:click="logout()" class="nav-link btn btn-warning"
                    >Logout</a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "nav",
  methods: {
    logout() {
      localStorage.removeItem("token");
      Vue.$toast.success("The Logout Is Done");
      this.$router.push("/login");
    },
  },
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

a.navbar-brand:hover {
  color: aqua;
  padding: 0;
  font-size: 40px;
}
a.resources.nav-link {
  color: aqua;
  font-size: 20px;
}

a.resources.nav-link:hover {
  color: aqua;
  font-size: 20px;
}
</style>
