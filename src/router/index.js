import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SingleJobView from "@/views/SingleJobView.vue";
import LogIn from "@/components/LogIn.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: "/log-in",
      name: "login",
      component: LogIn
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      meta: { requiresAuth: true }
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFoundView
    },
    {
      path: "/jobs/:id",
      name: "singleJob",
      component: SingleJobView,
      meta: { requiresAuth: true }
    },
    {
      path: "/add-job",
      name: "addJob",
      component: SingleJobView,
      meta: { requiresAuth: true }
    }
  ]
});

const isAuth = () => !!localStorage.getItem("accessToken");

router.beforeEach((to, from, next) => {
  if (!isAuth() && to.path !== '/log-in') {
    next('/log-in')
  }
  else {
    next()
  }
}
)

export default router;
