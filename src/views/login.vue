<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 mt-4">
          <h1 class="display-4 text-center">Login Form</h1>
          <form action="#">
            <div class="form-group">
              <label for="">email</label>
              <input
                type="text"
                name="email"
                class="form-control"
                v-model="email"
                placeholder="Type Your email"
              />
            </div>
            <div class="form-group">
              <label for="">password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                v-model="password"
                placeholder="Type Your password"
              />
            </div>
            <a v-on:click.prevent="login()" class="btn btn-primary btn-block"
              >Login</a
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        Vue.$toast.error("Enter the required data");

        return;
      }
      axios
        .post("https://reqres.in/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/homeafterlogin");
            Vue.$toast.success("Done");
          } else {
            Vue.$toast.error("Enter the required data");
          }
        })
        .catch((err) => {
          this.error = err.message;
          Vue.$toast.error(this.error);
        });
    },
  },
};
</script>
