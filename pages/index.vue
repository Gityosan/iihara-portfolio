<template>
  <div></div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
if (process.client) {
  gsap.from('.title', { x: 1000, opacity: 0, duration: 1 })
  gsap.from('.icon', { x: -1000, opacity: 0, duration: 1 })
}
</script>
