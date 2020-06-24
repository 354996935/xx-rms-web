<template>
  <div class="body-container vant-style">
    <van-search v-model="searchKey" shape="round" background="#fff" placeholder="点击搜索你想要的内容" />
    <van-tabs v-model="activeTab" color="#3BB45C">
      <van-tab title="推荐"></van-tab>
      <van-tab title="小说"></van-tab>
      <van-tab title="名著"></van-tab>
      <van-tab title="文学"></van-tab>
    </van-tabs>
    <div class="banner-box">
      <van-swipe class="swipe-box" indicator-color="#3C4D6E" :autoplay="3000">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <img class="banner-image needsclick" :src="item.img" @click="openPage(item.url)" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="tag-list">
      <div class="tag-item" v-for="i in 4" :key="i">
        <img src="https://img.tehui17.com/upload/2019-08-14/5d53c7fe34baae08e0000e1f.png" alt />
        <div class="pd-t10">找名著</div>
      </div>
    </div>
    <div class="title">推荐</div>
    <div class="list-box">
      <bookItemRow mod="1" v-for="i in 3" :key="i"></bookItemRow>
    </div>
  </div>
</template>
<script>
import bookItemRow from '@/components/book/item-row'
export default {
  name: 'home',
  components: {
    bookItemRow
  },
  data() {
    return {
      banners: [
        {
          img: 'https://img.tehui17.com/upload/2019-08-14/5d53c7fe34baae08e0000e1f.png'
        },
        {
          img: 'https://img.tehui17.com/upload/2019-08-14/5d53c7fe34baae08e0000e1f.png'
        }
      ],
      searchKey: '',
      activeTab: 0
    }
  },
  created() {
    this.f.setTitle('首页')
    // this.listMyCourseFn()
    // const redirect = this.$route.query.redirect
    // if (redirect) {
    //   history.replaceState(null, null, '#/')
    //   this.$router.push(decodeURIComponent(redirect))
    // }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.body-container {
  &.vant-style {
    .van-swipe__indicator {
      background-color: #97a0b1 !important;
    }
    .swipe-box {
      border-radius: 5px;
    }
  }
}
</style>
<style lang="scss" scoped>
.body-container {
}
.banner-box {
  padding: 16px;
  background: #fff;
  .banner-image {
    width: 100%;
    height: 100px;
    border-radius: 5px;
  }
}
.tag-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .tag-item {
    width: 25%;
    padding-top: 10px;
    text-align: center;
    color: #a0a0a0;
    font-size: 13px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
.title {
  font-size: 22px;
  color: #000;
  font-weight: 600;
  margin: 25px 16px 18px;
}
.list-box {
  padding: 0 16px;
}
</style>