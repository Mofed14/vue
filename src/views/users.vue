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
                <a @click="show()" class="btn btn-warning">Update</a>
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
    <modal name="edit">
      <div class="container">
        <form>
          <h1 class="display-4 text-center">Edit User</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary mb-2">Update</button>
        </form>
      </div>
    </modal>
    <modal name="add">
      <Add />
    </modal>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
// import Edit from "@/components/edit";
import Add from "@/components/adduser";
export default {
  name: "Users",
  components: {
    // Edit,
    Add,
  },
  data() {
    return {
      page: 1,
      urlDeleteUser: "https://reqres.in/api/users/",
      UrlUpdateUSer:"https://reqres.in/api/users/",
      form : {
        name : "",
        job : ""
      }
    };
  },
  computed:{
    users(){
      return this.$store.state.users;
    },
    more(){
      return this.$store.state.more;
    }
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
    remove(id) {
      axios
        .delete(this.urlDeleteUser + id)
        .then((res) => {
          if (res) {
            console.log(res);
            Vue.$toast.success("The User Is Deleted");
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
  },

  EditUser(id){
    if(!this.name || !this.job){
      Vue.$toast.err("Enter The Required Data")
    } else {
      axios.put(this.UrlUpdateUSer + id).then(res=>{
        console.log(res);
        
      }).catch()
    }
  }
};
</script>
