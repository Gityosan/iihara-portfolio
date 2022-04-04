<template>
  <div>
    <VAppBar app flat light>
      <template v-slot:append>
        <VBtn
          v-for="i in pages"
          class="link"
          variant="outlined"
          :href="i.path"
          :target="i.title === 'Github' ? '_blank' : ''"
          >{{ i.title }}
        </VBtn>
      </template>
    </VAppBar>
    <VMain><nuxt-page /></VMain>
  </div>
</template>
<script setup>
const pages = [
  {
    title: 'top',
    path: '/'
  },
  {
    title: 'Github',
    path: 'https://github.com/Gityosan/portfolio'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Portfolio',
    path: '/portfolio'
  }
]
</script>
<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: black;
  margin-left: 10px;
}
.scroll {
  overflow-x: scroll;
}
</style>
