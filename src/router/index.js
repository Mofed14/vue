import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Resource from "../views/resource.vue";
Vue.use(Router);


const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  
 routes : [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { guest: true }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { guest: true }
  },
  {
    path: "/resource",
    name: "resource",
    component: Resource,
    meta: { secure: true }

  },
]
});




router.beforeEach((to,form, next)=>{
if (to.matched.some(record => record.meta.secure)) {
  if (localStorage.getItem('token') == null) {
    Vue.$toast.error("There is no token");
    next({
      path:"/login"
    })
  } else{
    next()
  }
} else if (to.matched.some(record => record.meta.guest)) {
  if (localStorage.getItem('token') == null) {
    next()
  } else{
    
    next({
      path:"/resource"
    })
  }
} else {
  next()
} 
})


export default router;
