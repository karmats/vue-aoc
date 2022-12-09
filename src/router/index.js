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
      name: "resident",
      component: () => import("../doors/GiftSearchBar1.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
