<template>
  <section class="tags">
      <div class="tags-content">
          <ul>
            <li v-for="item in items" :style="{borderColor : item.color}" :class="item.title?'':'line'">
                  <a v-if="item.title" :href="item.href" :style="{color : item.color}">{{item.title ? item.title : item}}</a>
            </li>
          </ul>
      </div>
  </section>
</template>
<script>
    export default{
        name : 'tags',
        props:{
            items:{
                type : Array,
                required : true
            }
        }
    }
</script>
<style lang="stylus">
    .tags
        width 100%
        overflow hidden
        ul
            font-size 0
            white-space nowrap
            overflow-x auto
            padding 10px 0 40px 0
            margin-bottom -20px
            li
                display inline-block
                border-radius 3px
                margin 0 0 8px 8px
                border-width 1px
                border-style solid
                &.line
                    display block
                    margin 0
                    border none
                a
                    display block
                    height 50px
                    line-height 50px
                    font-size 14px
                    padding-left 10px
                    padding-right 10px
</style>

