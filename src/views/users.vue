<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3 mt-4">
        <h1 class="display-4 text-center">Users</h1>
      </div>
      <div class="col-md-12 mt-4">
        <a @click="showAdd()" class="btn btn-primary">Add New User</a>
        <table class="table table-dark mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>FirstName</th>
              <th>LasttName</th>
              <th>Avatar</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, i) in users" :key="i">
              <td>{{ user.id }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.first_name }}</td>
              <td>{{ user.last_name }}</td>
              <td>
                <img :src="user.avatar" />
              </td>
              <td>
                <router-link :to="'/homeafterlogin/edituser/' + user.id">
                  <a class="btn btn-warning">Update</a>
                </router-link>
              </td>
              <td>
                <a @click="remove(user.id, i)" class="btn btn-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
        <a
          class="btn btn-success mb-4 float-right"
          v-if="more.page < more.total_pages"
          @click="getMore()"
          >More</a
        >
        <a
          class="btn btn-warning mb-4"
          v-if="more.page >= more.total_pages"
          @click="getLess()"
          >Less</a
        >
      </div>
    </div>
    <modal name="add">
      <Add @clicked="hideAdd()" />
    </modal>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Add from "@/components/adduser";
export default {
  name: "Users",
  components: {
    Add,
  },
  data() {
    return {
      page: 1,
      urlDeleteUser: "https://reqres.in/api/users/",
      UrlUpdateUSer: "https://reqres.in/api/users/",
      name: "",
      job: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    more() {
      return this.$store.state.more;
    },
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.$store.dispatch("getUsers", this.page);
    },

    getMore() {
      this.getUsers((this.page += 1));
    },
    getLess() {
      this.getUsers((this.page -= 1));
    },
    remove(id, i) {
      axios
        .delete(this.urlDeleteUser + id)
        .then((res) => {
          if (res) {
            console.log(res);
            Vue.$toast.success("The User Is Deleted");
            this.users.splice(i, 1);
          }
        })
        .catch((err) => {
          Vue.$toast.error(err.message);
        });
    },

    showAdd() {
      this.$modal.show("add");
    },
    hideAdd() {
      this.$modal.hide("add");
    },
  },
};
</script>
