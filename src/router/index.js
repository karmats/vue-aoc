import { createRouter, createWebHistory } from "vue-router";
import AdventCalendar from "@/views/AdventCalendar.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calendar",
      component: AdventCalendar,
    },
    {
      path: "/1",
      name: "gift-search",
      component: () => import("../doors/1GiftSearchBar.vue"),
    },
    {
      path: "/2",
      name: "jokes",
      component: () => import("../doors/2JokeGenerator.vue"),
    },
    {
      path: "/3",
      name: "counter",
      component: () => import("../doors/3XmasCounter.vue"),
    },
    {
        path: "/4",
        name: "tree",
        component: () => import("../doors/4XmasTree.vue"),
      },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
