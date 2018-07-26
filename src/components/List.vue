<template>
    <div class="list">
        <a href="" class="list-item" v-for="list in lists">
            <div class="list-content">                    
                <div v-if="list.image_hlarge" class="cover" :style="{'background':'url('+list.image_hlarge+') center no-repeat'}"><div class="cover-content"></div>
                </div>
                <h3>{{list.title}}</h3>
                <p>{{list.content}}</p>
            </div>
            <div class="author">by &nbsp;
                <span class="name">{{list.category_name}}</span>
            </div>
        </a>
    </div>
</template>
<style lang="stylus">
    .list-item
        position relative
        display block
        padding 25px 18px 25px 0
        margin-left 18px
        box-sizing border-box
        &::before
            content  ''
            position absolute
            top 0
            left 0
            width 100%
            height 1px
            background #e3e3e3
            transform scaleY(0.5)
            -webkit-transform scaleY(0.5)
        .list-content
            overflow hidden
            margin-bottom 6px
            .cover
                float right
                width  25.6%
                background url('https://img3.doubanio.com/view/note/sqs/public/p52223330.jpg') center no-repeat
                background-size cover
                margin-left 15px
                div
                    padding-top 100%
            h3
                font-weight normal
                text-align left
                font-size 17px
                color #494949
                line-height 1.5em
                margin-bottom 6px
            p
                text-align left
                font-size 12px
                color #aaa
                line-height 1.5em
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp  3
                text-overflow  ellipsis
                overflow hidden
        .author
            font-size 10px
            color #aaa
            text-algin left

</style>
<script>
export default {
    name: 'List',
    props: {
        lists: {
            type: Array,
            required: true
        }
    },
    data() {
        return {

        }
    },
    filters: {
        subStr: function(value) {
            let newVal = value.replace(/<.*?>/g, '');
            return newVal.slice(0, 30);
        }
    }
}
</script>

