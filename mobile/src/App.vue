<template>
  <div id="app">
    <div class="app-header">
      <!-- <div>nav</div> -->
    </div>
    <div class="app-body" :class="{'have-toolbar': haveToolbar}">
      <keep-alive>
        <router-view ref="routerViewAlive" :class="['view-router']" />
      </keep-alive>
    </div>
    <div class="app-footer">
      <router-view name="tabbar" id="APP-TABBAR" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      haveToolbar: false
    }
  },
  watch: {
    $route(nv) {
      this.haveToolbar = !!nv.matched[0].components.tabbar
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/global.scss";
@import "./assets/fonts/iconfont.css";
#app {
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  &.iphonex {
    bottom: 20px;
  }
}

#nprogress .bar {
  background: red !important;
}

.app-header {
}

.app-body {
  position: absolute;
  bottom: 0;
  top: 0;
  width: 100%;
  overflow: auto;
  background: #fff;
  left: 0;
  right: 0;

  &.have-toolbar {
    bottom: 50px;
  }

  &.t65 {
    top: 65px;
  }

  &.t22 {
    top: 22px;
  }
}

.app-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.van-icon-hy {
  font-family: "hy" !important;
  font-size: 16px;
  font-style: normal;
}
.van-tabbar-item {
  .van-info {
    display: none;
  }
}
.card-goods {
  .dis {
    .van-stepper__input {
      color: #c9c9c9;
    }
  }
  .no-dis {
    .van-stepper__input {
      color: #666;
    }
  }
}

.view-router {
  // min-height: 100%;
}

.loading-style {
  height: 1px;
}
</style>
