<template>
  <section class="type-view">
      <section class="type-list">
          <ul class="content">
              <li v-for="item in types">
                  <a v-if="item.title" :href="item.href">
                      {{item.title}}<span class="arrow-right"></span>
                  </a>
              </li>
          </ul>
      </section>
  </section>
</template>
<script>
    export default {
        name : 'types',
        data(){
            return{}
        },
        props : {
            types : {
                type : Array,
                required : true
            }
        }
    }
</script>

<style lang="stylus">
    .type-view
        h2
            font-size 16px
            line-height 1.5em
        .type-list
            padding-top 10px
            padding-bottom 10px
            padding-left 15px
            ul
                display flex
                flex-wrap wrap
                border-top 1px solid #eee
                box-sizing border-box
                li
                    flex-shrink 0
                    width  50%
                    height 40px
                    line-height 40px
                    box-sizing border-box
                    border-bottom 1px solid #eee
                    border-right 1px solid #eee
                    box-sizing border-box
                    padding-right 15px
                    &:nth-child(even)
                        padding-left 15px
                        border-right none
                    a
                        diplay flex
                        justify-content space-between
                        font-size 14px
                        span
                            float right
                            width 8px
                            height 8px
                            border-top 1px solid #ccc
                            border-right 1px solid #ccc
                            transform rotate(45deg)
                            margin-top 14px

</style>

