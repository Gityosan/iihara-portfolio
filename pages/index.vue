<template>
  <v-row class="frame">
    <v-col cols="12" sm="6" class="pa-0 d-flex flex-column justify-center">
      <v-card flat class="titles">
        <v-card-title class="title">
          IIHARA<br />Portfolio<br />Site
        </v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" class="pa-0 d-flex flex-column justify-center">
      <v-img src="/icon.jpeg" class="icon"></v-img>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import gsap from 'gsap'
if (process.client) {
  gsap.from('.title', { x: 1000, opacity: 0, duration: 1 })
  gsap.from('.icon', { x: -1000, opacity: 0, duration: 1 })
}
</script>
<style lang="scss" scoped>
.frame {
  height: calc(100vmin - 64px);
  .titles {
    width: 100%;
    margin: 20px;
    padding: 20px;
    .title {
      color: #444;
      font-size: 64px;
      font-weight: bold;
      line-height: 1.2;
    }
  }

  .icon {
    width: 300px;
    max-height: 300px;
    object-fit: fill;
    border-radius: 100%;
    margin: 20px auto;
  }
}
</style>
