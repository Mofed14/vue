<template>
  <div class="home">
    <div id="navbar">
      <Nav />
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/nav.vue";

export default {
  name: "Home",
  components: {
    Nav,
  },
};
</script>
