<template>
  <div class="home-view">
    <ul class="quick-nav">
      <li>
        <a href="">影院热映</a>
      </li>
      <li>
        <!--华语新碟榜-->
        <a  :href="freedomNavOne.url">{{freedomNavOne.title}}</a>
        <!--<a href="">华语新碟榜</a>-->
      </li>
      <li>
        <a href="">豆瓣时间</a>
      </li>
      <li>
        <a href="">使用豆瓣App</a>
      </li>
    </ul>
    <List :items="events"></List>
    <Infinite-loading @infinite="onInfinite" force-use-inifinite-wrapper="true">
        <!--<loading slot="spinner"></loading>-->
        <span slot="no-more"> ---我们是有底线的--- </span>
    </Infinite-loading>
  </div>
</template>
<style lang="stylus">
  .quick-nav
      display flex
      flex-wrap wrap
      justify-content space-between
      padding 4%
      li
        flex-shrink 0
        width 50%
        padding 5px
        box-sizing border-box
        a
          display  block
          color #333
          text-align center
          border-radius 2px
          padding 5% 0
          background-color #f6f6f6

</style>

<script>
  import { mapState,mapActions } from 'vuex'
  import HeaderContent from '@/components/HeaderContent'
  import List from '@/components/List'
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    name : 'Home',
    components: {
      HeaderContent,
      List,
      InfiniteLoading
    },
    data() {
      return {

        freedomNav : [
          {
            url : '/music/newchinese/',
            title : '华语新碟榜'
          },{
            url : '/group/explore/livingaboard/',
            title : '生活在别处'
          },{
            url : '/group/explore/chat/',
            title : '来聊五块钱'
          },{
            url:'/group/explore/rent/',
            title : '租房找室友'
          },{
            url:'',
            title : '豆瓣日历'
          },{
            url:'/music/newjapankorean/',
            title : '日韩新碟榜'
          },{
            url:'/group/explore/beauty/',
            title : '变瘦变美变漂亮'
          },{
            url:'/book/hotnonfiction',
            title : '最受关注图书'
          },{
            url:'/tv/chinese/',
            title : '近期值得看的国产剧'
          },{
            url:'',
            title : '同城活动'
          },{
            url : '/music/newwestern/',
            title : '欧美新碟榜'
          }
        ]
      }
    },
    computed :{
      freedomNavOne : function(){
        var len = this.freedomNav.length;
        return this.freedomNav[Math.floor(Math.random()*len)];
      },
      ...mapState({
        events : state=>state.activities.events
      })
    },
    methods : {
      onInfinite($state){
        setTimeout(()=>{
          this.loadMore();
          // if(this.events.length){
            $state.loaded();
          // }else{
            // $state.complete();
          // }
        },1000)
      },
      ...mapActions([
        'loadMore'
      ])
    }
  }
</script>
