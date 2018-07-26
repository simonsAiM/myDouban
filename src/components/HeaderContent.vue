<template>
    <header class="header-content">
        <a href="" title="豆瓣logo" class="logo">
            <h1>豆瓣</h1>
        </a>
        <nav class="main-nav">
            <div class="nav-list">
                <router-link :to="{name:'Movie'}" title="电影" style="color:#2384E8;">电影</router-link>
                <router-link :to="{name:'Book'}" title="图书" style="color:#9F7860;">图书</router-link>
                <router-link :to="{ name:'Status'}" title="广播" style="color:#E4A813;">广播</router-link>
                <router-link :to="{ name : 'Group'}" title="小组" style="color:#2AB8CC;">小组</router-link>
            </div>
            <span class="search-link">搜索</span>
        </nav>
    </header>
</template>
<style lang="stylus">
    .header-content
        display flex
        justify-content  space-between
        align-items  center
        padding  2.8% 4%
        border-bottom 1px solid #eee
        .logo
            color #00b600
        .logo h1
            font-size  20px

        .main-nav
            padding-left   10px
            .nav-list
                display inline-block
                white-space nowrap 
                a
                    font-size 14px
                    margin-right 15px
            .search-link
                width 16px
                height 16px
                // background url(data:image/png;base64,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) no-repeat
                box-sizing border-box

</style>
<script>
    export default{
        name : 'header-content'
    }
</script>

