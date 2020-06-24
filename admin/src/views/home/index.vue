<template>
  <div id="app">
    <div class="view-body">
      <div class="view-body-cnt flex-box">
        <div class="view-cnt-container flex-item">
          <div class="view-title-box">{{ viewName }}</div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {}
  },
  computed: {
    viewName() {
      let route = this.$route || {}
      let meta = route.meta || {}
      return meta.title || '-'
    },
  },
}
</script>

<style scoped>
.view-body {
  background: #f3f3f3;
  padding: 20px 0 10px;
}
.view-body-cnt {
  max-width: 1200px;
  min-width: 1000px;
  margin: 0 auto;
  height: 100%;
}
.view-cnt-container {
  min-height: 600px;
  background: #fff;
  padding: 0 17px 20px;
  border-radius: 10px;
}
.view-title-box {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  color: #2f4776;
  text-align: left;
  border-bottom: 1px solid #f2f2f2;
}
</style>
