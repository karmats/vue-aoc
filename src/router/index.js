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
      path: "/5",
      name: "gift-label",
      component: () => import("../doors/5GiftLabel.vue"),
    },
    {
      path: "/6",
      name: "comparison",
      component: () => import("../doors/6ItemComparison.vue"),
    },
    {
      path: "/7",
      name: "presents",
      component: () => import("../doors/7DragAndDropPresents.vue"),
    },
    {
      path: "/8",
      name: "happy-holidays",
      component: () => import("../doors/8HappyHolidays.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
