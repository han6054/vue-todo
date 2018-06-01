<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{count}}</p>
    <transition name='fade'>
        <router-view/>
    </transition>
    <!-- <todo></todo> -->
    <Footer></Footer>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  methods: {
    ...mapActions(['updateCountAsync'])
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 1000
    // })
    this.updateCountAsync({num: 5, time: 1000})
  },
  computed: {
    ...mapState(['count']),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters(['fullName'])
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


