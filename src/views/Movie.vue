<template>
  <div class="movie-view">
    <scroller title="影院热映" :items="hotMovies" class="movies-first"></scroller>
    <scroller title="新片速递" :items="newMovies"></scroller>
    <scroller title="豆瓣top250" :items="topMovies"></scroller>
    <section>
      <header><h2>发现好电影</h2></header>
      <tags :items="movieTags"></tags>
    </section>
    <section>
      <header><h2>分类浏览</h2></header>
      <types :types="movieTypes"></types>
    </section>
    <download-app></download-app>
  </div>
</template>
<script>
    import { mapState } from 'vuex'
    import Scroller from '@/components/Scroller'
    import Tags from '@/components/Tags'
    import Types from "@/components/Types"
    import DownloadApp from '@/components/DownloadApp'

    export default{
      name : 'movie',
      data(){
        return { 
          // hotMovies : []
          // title : null
        }
      },
      components : {
        Scroller,
        Types,
        Tags,
        DownloadApp
      },
      computed : {
        ...mapState({
          movieTags : state=>state.movie.movieTags,
          movieTypes: state=>state.movie.movieTypes,
          hotMovies : state=>state.movie.hotMovies,
          newMovies : state=>state.movie.newMovies,
          topMovies : state=>state.movie.topMovies
        })
      },
      methods:{
        getMovie:function(){
            this.$store.dispatch('getMovies');
        }
      },
      created(){
        this.$store.dispatch('getMovies');
      }
    }
</script>
<style lang="stylus">
  .movie-view
    h2
      font-size 18px
  .movies-first
      padding-top 5px
</style>
