<template>
  <div class="home">
    <div id="nav">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navbar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
