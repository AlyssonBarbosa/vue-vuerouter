import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sourceData from "@/data.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 400);
      })
    );
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/protected",
      name: "protected",
      component: () => import("@/views/Protected.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/destination/:id/:slug",
      name: "destination.show",
      component: () => import("@/views/DestinationShow.vue"),
      props: true,
      beforeEnter(to, from) {
        const exists = sourceData.destinations.find(
          (destination) => destination.id === parseInt(to.params.id)
        );

        if (!exists)
          return {
            name: "notFound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          };
      },
      children: [
        {
          path: ":experienceSlug",
          name: "experience.show",
          component: () => import("@/views/ExperienceShow.vue"),
          props: (route) => ({
            ...route.params,
            id: parseInt(route.params.id),
          }),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "login" };
  }
});

export default router;
