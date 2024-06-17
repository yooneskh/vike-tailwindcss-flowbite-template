<template>
  <div class="flex p-10 gap-14">
    <div class="flex flex-col">
      <a href="/" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Welcome
      </a>
      <a href="/about" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        About
      </a>
    </div>
    <div id="page-content"><slot /></div>
  </div>
</template>

<script setup>
import './index.css'
</script>
