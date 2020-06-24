<template>
  <div class="spinner-box">
    <div class="lds-ball" style="background: #fff;">
      <img class="load-img" src="@/assets/images/page-loading.gif" alt="">
      <div>正在加载</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.spinner-box {
  background: #fff;
  .load-img {
    width: 100px;
  }
}
</style>
