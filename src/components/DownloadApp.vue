<template>
  <section class="download-app">
    <div class="info">
      <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" width="48">
      <strong>豆瓣</strong>
    </div>
    <a href="">去 App Store 免费下载iOS客户端</a>
  </section>
</template>
<script>
  export default{
    name : 'download-app'
  }
</script>
<style lang="stylus">
  .download-app
    text-align center
    margin-top 50px
    margin-bottom 20px
    .info
      line-height 48px
      margin-bottom 15px
      img
        display inline-block
        margin-right 10px
        vertical-align middle
      strong
        display inline-block
        font-size 24px
        vertical-align middle
</style>
