<template>
  <section class="book-view">
    <scroller :title="值得推荐" :items="ABookes"></scroller>
    <scroller :title="值得推荐2" :items="BBookes"></scroller>
    <scroller :title="值得推荐3" :items="CBookes"></scroller>
  </section>
</template>
<script>
    import { mapState } from 'vuex'
    import Scroller from '@/components/Scroller'
    export default{
      name : 'book-view',
      data(){
        return{

        }
      },
      components : {
        Scroller,
      },
      computed:{
        ...mapState({
          ABookes : state=>state.book.ABookes,
          BBookes : state=>state.book.BBookes,
          CBookes : state=>state.book.CBookes,
          bookTags : state=>state.book.bookTags,
          bookTypes : state=>state.book.bookTypes
        })
      }
    }
</script>