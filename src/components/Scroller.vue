<template>
  <section  class="scroller-h">
    <header>
        <h2>{{title}}</h2>
        <a href="#">更多</a>
    </header>
    <section class="content">
        <ul class="list">
            <li v-for="item in items" :key="item.id">
                <a href="#">
                    <div class="img" :style="{ backgroundImage : 'url('+item.images.small+')'}"></div>
                    <!--<img v-if="item.images" :src="item.images.small" alt="">-->
                    <div class="title">{{item.title}}</div>
                    <rating :rate="item.rating"></rating>
                </a>
            </li>
        </ul>
    </section>
  </section>
</template>
<script>
    import Rating from '@/components/Rating'
    export default{
        name : 'scroller-h',
        props : {
            title :{
                type : String,
                default : ''
            },
            items : {
                type : Array
            }
        },
        components:{
            Rating
        }
    }
</script>
<style lang="stylus">
    header
        display flex
        justify-content space-between
        line-height 40px
        padding  0 15px
        h2
            font-size 18px
        a
            font-size 14px
            color #42bd56
    .scroller-h
        .content
            position relative
            width 100%;
            overflow hidden
            z-index 2
            .list
                display flex
                align-items flex-start
                overflow-x scroll
                padding-bottom 40px
                margin-bottom -30px
                li
                    flex-shrink 0
                    width  27%
                    text-align center
                    margin-right 2%
                    &:first-child
                        margin-left 4%
                    &:last-child
                        padding-right 4%
                    .img
                        width 100%
                        overflow hidden
                        background-size cover
                        background-position center
                        &::before
                            content ''
                            display block
                            margin-top 142.85714%
                    .title
                        font-size 15px
                        color #333
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                        padding-top 5px
                        

</style>
