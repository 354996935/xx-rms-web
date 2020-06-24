<template>
  <van-nav-bar
    class="nav-bar nav-bar-vant"
    :title="config.title"
    :left-text="config.leftText"
    :left-arrow="config.showLeftArrow"
    @click-left.stop="clickLeft"
    :style="config.navbarStyle"
  >
    <!-- <div class="right-box left" slot="left" v-if="config.isCusLeft" @click.stop="clickLeft">
      <div class="right-bg" :style="config.ri_1_style.bg"></div>
      <i class="zdy zdy-fanhui" :style="config.ri_1_style.i"></i>
      <i class="zdy zdy-fanhui ri-2" :style="config.ri_2_style"></i>
    </div>-->

    <!-- <div class="nav-title" slot="title" v-if="config.customTitles && config.customTitles.length">
      <div class="nav-tab-list">
        <div v-for="(item, index) in config.customTitles" :key="index" @click="item.click">
          <div class="title-style" :class="{'actived': actTab === index}">{{item.title}}</div>
          <div class="nav-tab-line" v-if="actTab === index"></div>
        </div>
      </div>
    </div>-->

    <div slot="right" style="width: 100%; height: 100%; display: flex;"></div>
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default() {
        return {
          title: '',
          showLeftArrow: true,
          leftText: '',
          rightText: '',
          showRightIcon: false,
        }
      }
    },
    clickLeft: {
      type: Function,
      default: function () {
        console.log('[debug]::app history back => ', this.$route)
        if (this.$route.name === 'login') {
          this.$router.push({ path: '/' })
          return false
        }
        if (window.history.length <= 1) {
          this.$router.push({ path: '/' })
          return false
        } else {
          this.$router.go(-1)
        }
      }
    },
    clickRight: {
      type: Function,
      default: function () {
        console.log('[debug]::clickRight')
      }
    },
    actTab: Number
  },
  data() {
    return {
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style lang="scss">
.nav-bar {
  &.nav-bar-vant {
    &.white-color {
      .van-nav-bar__title {
        color: #fff;
      }
      .van-nav-bar__left {
        i {
          color: #fff;
        }
      }
    }
    .van-nav-bar__title,
    .van-nav-bar__right {
      font-size: 18px;
    }
    .van-nav-bar__left {
      font-size: 18px;
      left: 12px;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      i {
        font-size: 24px;
        color: #494949;
      }
    }
    .van-nav-bar__right {
      font-size: 18px;
      width: 38px;
      height: 38px;
    }
    .van-icon {
      font-size: 18px;
    }
  }
}
</style>


<style lang="scss" scoped>
.nav-bar {
  position: relative;
  z-index: 104 !important;
  height: 44px;
  font-size: 18px;
  color: #030303;
  padding-top: 22px;
  background: #fff;
  width: 100%;

  &.no-btm-border::after {
    border-bottom-width: 0;
  }

  &.white-color {
    color: #fff;
  }

  &.transparent-bg {
    background: transparent;
  }

  .hy-gouwuche,
  .zdy-fenxiang {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .zdy-fanhui {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .right-box {
    width: 100%;
    height: 100%;
    position: relative;

    &.left {
      top: -2px;
    }

    .right-bg {
      height: 100%;
      background: #333;
      border-radius: 50%;
      opacity: 0.4;
    }

    .ri-2 {
      color: #494949;
    }

    i {
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 20px;
      color: #494949;
      font-weight: 700;
    }

    .hy-gouwuche {
      font-size: 25px;
    }
  }

  .nav-tab-list {
    display: flex;
    justify-content: space-around;
    .nav-tab-line {
      height: 2px;
      width: 30px;
      background: #fff;
      margin: -10px auto 0;
    }
    .title-style {
      color: #fedadb;
      font-size: 15px;
      &.actived {
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
</style>


