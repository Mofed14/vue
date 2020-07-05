<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3 mt-4">
        <h1 class="display-4 text-center">Single Resources</h1>
      </div>
      <div class="col-md-12">
        <div class="card mt-4">
          <h5 class="card-header">User Information</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <h5 class="card-title">name : {{ resource.name }}</h5>
                <p class="card-text">Year : {{ resource.year }}</p>
                <p class="card-text">Color : {{ resource.color }}</p>
                <p class="card-text">
                  Pantone_value : {{ resource.pantone_value }}
                </p>
              </div>
              <div class="col-6">
                <h5 class="card-title">
                  Company : {{ singleresource.company }}
                </h5>
                <p class="card-text">Url : {{ singleresource.url }}</p>
                <p class="card-text">Color : {{ singleresource.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Single",
  data() {
    return {
      param: this.$route.params.id,
    };
  },
  computed: {
    resource() {
      return this.$store.state.resource;
    },
    singleresource() {
      return this.$store.state.singleresource;
    },
  },
  mounted() {
    this.getSingleResource();
  },
  methods: {
    getSingleResource() {
      this.$store.dispatch("getSingleResource", this.param);
    },
  },
};
</script>
