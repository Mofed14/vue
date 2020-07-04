<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3 mt-4">
        <h1 class="display-4 text-center">Resources</h1>
      </div>
      <div class="col-md-12 mt-4">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Yeare</th>
              <th>Color</th>
              <th>Pantone_Value</th>
              <th>Single Resource</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resource, i) in resources" :key="i">
              <td>{{ resource.id }}</td>
              <td>{{ resource.name }}</td>
              <td>{{ resource.year }}</td>
              <td>{{ resource.color }}</td>
              <td>{{ resource.pantone_value }}</td>
              <td>
                <router-link
                  :to="'/homeafterlogin/singleresource/' + resource.id"
                  >Read more</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resource",
  data() {
    return {};
  },
  computed: {
    resources() {
      return this.$store.state.resources;
    },
  },
  mounted() {
    this.$store.dispatch("getResources");
  },
};
</script>
