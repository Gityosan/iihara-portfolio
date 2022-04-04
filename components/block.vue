<template>
  <v-card class="frame rounded-lg" elevation="5">
    <v-card-title class="title">{{ props.title }}</v-card-title>
    <v-card-text class="content">{{ props.content }}</v-card-text>
  </v-card>
</template>
<script setup lang="ts">
interface Props {
  title: string
  content?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  content: ''
})
</script>
<style lang="scss" scoped>
.frame {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  .title {
    color: #444;
    font-size: 20px;
    font-weight: bold;
  }

  .content {
    color: #444;
  }
}
</style>
