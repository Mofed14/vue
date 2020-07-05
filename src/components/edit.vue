<template>
  <div class="container">
    <form>
      <h1 class="display-4 text-center mt-4">
        Edit {{ user.first_name + " " + user.last_name }}
      </h1>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Job</label>
        <input type="text" class="form-control" v-model="job" />
      </div>
      <a @click="updateUser()" class="btn btn-primary mb-2">Update</a>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
export default {
  name: "Edit",
  // props:['users.id']
  data() {
    return {
      UrlEditUser: "https://reqres.in/api/users/",
      param: this.$route.params.id,
      name: "",
      job: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$store.dispatch("getUser", this.param);
    },
    updateUser() {
      if (!this.name || !this.job) {
        Vue.$toast.error("Enter The Required Data");
      } else {
        axios
          .put(this.UrlEditUser + this.param, {
            name: this.name,
            job: this.job,
          })
          .then(() => {
            Vue.$toast.success("The User Is Updated");
            this.$router.push("/homeafterlogin/users");
          })
          .catch((err) => {
            Vue.$toast.error(err.message);
          });
      }
    },
  },
};
</script>
