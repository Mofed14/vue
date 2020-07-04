<template>
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
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    
    <button type="submit" class="btn btn-primary mb-2">Update</button>
  </form>
  </div>

</template>


<script>
export default {
    name : "Edit",
    // props:['users.id']
}
</script>
