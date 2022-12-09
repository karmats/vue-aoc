<template>
  <header>
    <nav
      class="relative w-full flex flex-wrap items-center justify-between py-3 text-gray-dark bg-green shadow-lg"
    >
      <div
        class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
      >
        <div class="container-fluid">
          <router-link class="text-xl" to="/">Calendar</router-link>
        </div>
      </div>
    </nav>
  </header>
  <div class="flex flex-col gap-5 justify-center items-center p-6">
    <main>
      <router-view />
    </main>
  </div>
  <footer class="bottom-0 fixed w-full bg-green text-gray-dark p-3 text-center">
    Made for
    <a
      href="https://adventofvue.com"
      target="_blank"
      rel="noreferrer noopener"
      class="underline hover:bg-gray-dark hover:text-green"
    >
      Advent Of Vue 2022
    </a>
  </footer>
</template>
