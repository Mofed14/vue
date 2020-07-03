<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3 mt-4">
        <h1 class="display-4 text-center">Users</h1>
      </div>
      <div class="col-md-12 mt-4">
        <a class="btn btn-primary">Add New User</a>
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
                <a class="btn btn-warning">Update</a>
              </td>
              <td>
                <a @click="remove(user.id)" class="btn btn-danger">Deleted</a>
              </td>
            </tr>
          </tbody>
        </table>
        <a
          class="btn btn-success mb-4"
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
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  name: "Users",
  data() {
    return {
      page: 1,
      urlGetUsers: "https://reqres.in/api/users?page=",
      urlDeleteUser : "https://reqres.in/api/users/",
      users: [],
      more: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers(page) {
      console.log(page);
      axios
        .get(this.urlGetUsers + this.page)
        .then((res) => {
          this.more = res.data;
          console.log(this.more);

          if (!res.data.data.length) {
            Vue.$toast.error("Not Found Any Data Here");
          } else {
            this.users = res.data.data;
            console.log(this.users);
          }
        })
        .catch((err) => {
          Vue.$toast.error(err.message);
        });
    },
    getMore() {
      this.getUsers((this.page += 1));
    },
    getLess() {
      this.getUsers((this.page -= 1));
    },
    remove(id){
      axios.delete(this.urlDeleteUser + id).then(res=>{
        if(res){
          console.log(res);
          
          Vue.$toast.success("The User Is Deleted")
        }
      }).catch(err=>{
        Vue.$toast.error(err.message)
      })
    }
  },
};
</script>
