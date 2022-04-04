<template>
  <v-card elevation="5" class="frame">
    <v-row>
      <v-col cols="12" sm="6" class="pa-0 d-flex flex-column justify-center">
        <v-card flat class="titles">
          <v-card-title class="title">
            {{ title }}
          </v-card-title>
          <v-card-subtitle>{{ url }}</v-card-subtitle>
          <v-card-text>
            {{ content }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" class="pa-0 d-flex flex-column justify-center">
        <v-img :src="img" class="icon"></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
interface Props {
  title: string
  content?: string
  url?: string
  img?: string
}
const { title, content, url, img } = withDefaults(defineProps<Props>(), {
  title: 'タイトル',
  content: '説明文',
  url: 'https://portfolio-iihara.web.app/',
  img: '/icon.jpeg'
})
</script>
<style lang="scss" scoped>
.frame {
  margin: 20px auto;
  max-width: 800px;
  .titles {
    width: 100%;
    margin: 20px;
    padding: 20px;
    .title {
      color: #444;
      font-size: 36px;
      font-weight: bold;
      line-height: 1.2;
    }
  }

  .icon {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    margin: 20px auto;
  }
}
</style>
