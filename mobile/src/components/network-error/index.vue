<template>
  <div class="net-err-style">
    <img src="@/assets/images/net-error.png" alt class="net-img" />
    <div class="net-info">网络不给力</div>
    <div class="net-tip">别紧张，当前你可以刷新重新加载页面</div>
    <van-button size="normal" round class="net-btn" @click="reload">重新加载</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    reload() {
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.net-err-style {
  text-align: center;
  .net-img {
    margin-top: 100px;
  }
  .net-info {
    margin-top: 20px;
  }
  .net-tip {
    margin-top: 10px;
    color: #dcdcdc;
  }
  .net-btn {
    margin-top: 20px;
  }
}
</style>

