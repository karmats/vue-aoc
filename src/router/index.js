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
      path: "/9",
      name: "sorting-presents",
      component: () => import("../doors/9SortingPresents.vue"),
    },
    {
      path: "/10",
      name: "secret-santa",
      component: () => import("../doors/10SecretSanta.vue"),
    },
    {
      path: "/10/clue-1",
      name: "secret-santa-clue-1",
      component: () => import("../components/Clue1.vue"),
    },
    {
      path: "/10/clue-2",
      name: "secret-santa-clue-2",
      component: () => import("../components/Clue2.vue"),
    },
    {
      path: "/10/clue-3",
      name: "secret-santa-clue-3",
      component: () => import("../components/Clue3.vue"),
    },
    {
      path: "/10/answer",
      name: "secret-santa-answer",
      component: () => import("../components/SecretSantaAnswer.vue"),
    },
    {
      path: "/11",
      name: "xmas-tree-lights",
      component: () => import("../doors/11ChristmasTreeLights.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
