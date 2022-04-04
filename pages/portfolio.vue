<template>
  <v-card flat>
    <v-card-title class="title">PortFolio</v-card-title>
    <portfolio-block
      v-for="i in contents"
      :key="i.title"
      :title="i.title"
      :content="i.content"
      :url="i.url"
      :img="i.img"
    />
  </v-card>
</template>
<script setup lang="ts">
const contents = [
  {
    title: 'Lit+GrapesJsの簡易HTMLビルダーアプリ',
    content:
      '去年から注目しているLItと相性が良さそうなライブラリとしてGrapesJsを見つけて、連携させ方を学ぶために作ったwebアプリです。右上のダウンロードアイコンをクリックするとそれまでに作ったHTMLがPDFとしてダウンロードできます。',
    url: 'https://main.d2xvgc55woftez.amplifyapp.com/',
    img: '/grapesjs.png'
  },
  {
    title: 'go-webassemblyの電卓アプリ作成',
    content:
      'フロントエンドでも重たい処理を行えないかと思い、Goをwasmを通してフロントエンドで実行する電卓アプリを作ってみました。githubを見ていただければ分かりますが、JSによる関数定義が一切ありません。wasmのみでアプリケーションを作ることはないと思いますが、要所要所で使う分には強みを発揮するだろうと考えています。',
    url: 'https://main.d3usnbgonskc6w.amplifyapp.com/',
    img: '/calculator.png'
  },
  {
    title: 'LitとViteを使ったストップウォッチアプリ',
    content: 'LitとViteの勉強用に作ったストップウォッチアプリです。',
    url: 'https://stopwatch.d1k5vwj8k5chym.amplifyapp.com/',
    img: '/stopwatch.png'
  }
]
</script>
<style lang="scss" scoped>
.title {
  color: #444;
  font-size: 48px;
  font-weight: bold;
  margin: 20px auto;
  max-width: 800px;
}
</style>
