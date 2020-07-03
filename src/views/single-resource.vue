<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3 mt-4">
        <h1 class="display-4 text-center">Single Resources</h1>
      </div>
      <div class="col-md-12">
        <table class="table table-dark mt-4" v-if="resource || resource.length">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>year</th>
              <th>color</th>
              <th>Pantone_Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{resource.id}}</td>
              <td>{{resource.name}}</td>
              <td>{{resource.year}}</td>
              <td>{{resource.color}}</td>
              <td>{{resource.pantone_value}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "Single",
  data() {
    return {
      url: "https://reqres.in/api/unknown/",
      resource: {},
    };
  },
  mounted() {
    this.getSingleResource();
  },
  methods: {
    getSingleResource() {
      axios
        .get(this.url + this.$route.params.id)
        .then((res) => {
            if(!res.data.data){
            Vue.$toast.error("Not Found Any Data Here");
            } else {
                this.resource = res.data.data;
                console.log(this.resource);
                
                
            }
        })
        .catch((err) => {
          Vue.$toast.error(err.message);
        });
    },
  },
};
</script>
