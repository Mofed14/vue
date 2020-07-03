import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import HomeAfterLogin from "../views/HomeAfterLogin.vue";
import Resources from "../views/resources.vue";
import Users from "../views/users.vue";
import SingleResource from "../views/single-resource.vue";
Vue.use(Router);



const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "",
      name: "Home",
      component: Home,
      children: [
        {
          path: "",
          component: Login,
          pathMatch: "full",
          meta: { guest: true },
        },
        {
          path: "login",
          name: "login",
          component: Login,
          meta: { guest: true },
        },
        {
          path: "register",
          // name: "register",
          component: Register,
          meta: { guest: true },
        },
      ],
    },
    {
      path: "/homeafterlogin",
      component: HomeAfterLogin,
      meta: { secure: true },
      children: [
        {
          path: "/homeafterlogin",
          component: Users,
          pathMatch: "full",
        },
        {
          path: "/homeafterlogin/users",
          component: Users,
          pathMatch: "full",
        },
        {
          path: "/homeafterlogin/resources",
          component: Resources,
        },{
          
          path: "/homeafterlogin/singleresource/:id",
          component: SingleResource,
        },
      ],
    },
  ],
});

router.beforeEach((to, form, next) => {
  if (to.matched.some((record) => record.meta.secure)) {
    if (localStorage.getItem("token") === null) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem("token") == null) {
      next();
    } else {
      next({
        path: "/homeafterlogin",
      });
    }
  } else {
    next();
  }
});

export default router;
