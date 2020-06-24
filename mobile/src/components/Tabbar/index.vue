<template>
  <van-tabbar v-model="active" active-color="#3BB45C" class="app-tabber vant-style">
    <van-tabbar-item
      v-for="(tab, index) in tabbar"
      :icon="tab.icon"
      :to="tab.path"
      :dot="tab.dot"
      :info="tab.info"
      :key="index"
    >
      {{ tab.name }}
      <van-icon
        class-prefix="hy"
        slot="icon"
        slot-scope="props"
        :name="tab.icon + (props.active ? '-fill' : '')"
      />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem,
  },
  computed: {
  },
  data() {
    return {
      active: 0,
      tabbar: [
        {
          name: '首页',
          path: '/',
          pathName: 'home',
          icon: 'temai',
          dot: false,
          info: '',
          show: true
        },
        {
          name: '文件',
          path: '/',
          pathName: 'a',
          icon: 'message',
          dot: false,
          info: '',
          show: true
        },
        {
          name: '笔记',
          path: '/',
          pathName: 'b',
          icon: 'message',
          dot: false,
          info: '',
          show: true
        },
        {
          name: '我的',
          path: '/user',
          pathName: 'user',
          icon: 'wode',
          dot: false,
          info: '',
          show: true
        }
      ],
    }
  },

  watch: {
  },

  created() {
  },

  methods: {
  }
}
</script>

<style lang="scss">
// @import "../../assets/scss/global.scss";
.app-tabber {
  &.vant-style {
    .van-info {
      display: block;
      // background: $subject-color;
    }
  }
}
</style>
<style lang="scss" scoped>
.hy {
  font-size: 22px;
}
.app-tabber {
  position: static;
}
</style>
