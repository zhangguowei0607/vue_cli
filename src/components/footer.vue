<template>
  <footer class="footer">
    <van-tabbar v-model="active" @change="currentPath">
      <van-tabbar-item v-for="(item, index) in list" :key="index" :icon="item.ico" :to="item.path">
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  data () {
    return {
      active: 0,
      list: [
        { title: '首页', path: '/home', ico: 'home-o' },
        { title: '分类', path: '/kind', ico: 'search' },
        { title: '购物车', path: '/cart', ico: 'friends-o' },
        { title: '用户', path: '/user', ico: 'setting-o' }
      ]
    }
  },
  computed: {
    // computed 初始化会监听  watch 初始化不会监听
    currentPath () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.active = this.list.findIndex(item => {
        return item.path === this.$route.path // 返回达成条件的索引
      })
      return this.$route.path
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
