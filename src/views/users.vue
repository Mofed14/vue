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

                  <a   class="btn btn-warning">Update</a>
                   </router-link>
              </td>
              <td>
                <a @click="remove(user.id, i)" class="btn btn-danger">Deleted</a>
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
    <!-- <modal name="edit">
      <div class="container">
        <form>
          <h1 class="display-4 text-center">Edit User</h1>
          <div class="form-group">
            <label>name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-bind:value="user.first_name + ' ' + user.last_name"
              
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">job</label>
            <input
              type="text"
              class="form-control"
              id="job"
              v-model="job"
            />
          </div>
          <a @click="updateuser(user.id)" class="btn btn-primary mb-2">Update</a>
        </form>
      </div>
    </modal> -->
    <modal name="add">
      <Add />
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
      UrlUpdateUSer:"https://reqres.in/api/users/",
      name : "",
      job  : "",
    };
  },
  computed:{
    users(){
      return this.$store.state.users;
    },
    more(){
      return this.$store.state.more;
    },

  },
  mounted() {
    this.getUsers()
  },
  methods: {
    
    getUsers(){
  this.$store.dispatch("getUsers", this.page)

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
            this.users.splice(i, 1)
          }
        })
        .catch((err) => {
          Vue.$toast.error(err.message);
        });
    },
    show() {
      this.$modal.show("edit");
    },
    hide() {
      this.$modal.hide("edit");
    },
    showAdd() {
      this.$modal.show("add");
    },
    hideAdd() {
      this.$modal.hide("add");
    },

    // updateUser(){
    //     if (!this.name || !this.job) {
    //       Vue.$toast.error("Enter The Required Data")
    //     } else {
    //       axios.put(this.UrlUpdateUSer + user.id, {
    //         name : this.name,
    //         job : this.job
    //       }).then(res=>{
    //        this.user = res.data;
    //        console.log(this.user);
           
    //       }).catch(err=>{
    //         Vue.$toast.error(err.message)
    //       })
    //     }
    //   }
  },

    
};
</script>
