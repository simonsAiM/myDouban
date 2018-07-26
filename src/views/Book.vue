<template>
  <section class="book-view">
    <scroller title="最受关注图书 | 虚构类" :items="novel"></scroller>
    <scroller title="最受关注图书 | 非虚构类" :items="reality"></scroller>
    <scroller title="最受关注图书 | 旅行类" :items="travel"></scroller>
    <section class="book-tags">
      <header><h2>发现好书</h2></header>
      <tags :items="bookTags"></tags>
    </section>
    <section class="book-types">
      <header><h2>分类浏览</h2></header>
      <types :items="bookTypes"></types>
    </section>
    <download-app></download-app>
  </section>
</template>
<script>
    import { mapState } from 'vuex'
    import Scroller from '@/components/Scroller'
    import Tags from '@/components/Tags'
    import Types from '@/components/Types'
    import DownloadApp from '@/components/DownloadApp'
    export default{
      name : 'book-view',
      data(){
        return{

        }
      },
      components : {
        Scroller,
        Tags,
        Types,
        DownloadApp
      },
      computed:{
        ...mapState({
          novel : state=>state.book.novel,
          reality : state=>state.book.reality,
          travel : state=>state.book.travel,
          bookTags : state=>state.book.bookTags,
          bookTypes : state=>state.book.bookTypes
        })
      },
      created(){
        this.$store.dispatch('getBook');
      }
    }
</script>