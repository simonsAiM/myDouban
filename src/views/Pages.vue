<template>
  <div class="page-view">
      <header-content></header-content>
      <router-view></router-view>
  </div>
</template>
<script>
    import HeaderContent from '@/components/HeaderContent'

    export default{
        name : 'pages',
        components : {
            HeaderContent
        }
    }
</script>
