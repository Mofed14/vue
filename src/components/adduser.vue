<template>
<div class="container">
    <form>
      <h1 class="display-4 text-center">Add User</h1>
    <div class="form-group">
      <label >Name</label>
      <input
        type="text"
        class="form-control"
        name="name"
        v-model="name"
      />
    </div>
    <div class="form-group">
      <label>job</label>
      <input type="text"  class="form-control"  name="job" v-model="job" />
    </div>
    
    <a @click="addUser()" class="btn btn-primary mb-2">Add</a>
  </form>
  </div>

</template>


<script>
import Vue from "vue";
import axios from "axios";
export default {
    name : "Add",
    data(){
      return {
        UrlAddUser : "https://reqres.in/api/users",
        name : "",
        job  : "",
        user: {},
      }
    },
    methods : {
      addUser(){
        if (!this.name || !this.job) {
          Vue.$toast.error("Enter The Required Data")
        } else {
          axios.post(this.UrlAddUser, {
            name : this.name,
            job : this.job
          }).then(res=>{
           this.user = res.data;
           console.log(this.user);
           
          }).catch(err=>{
            Vue.$toast.error(err.message)
          })
        }
      }
    }
    
}
</script>