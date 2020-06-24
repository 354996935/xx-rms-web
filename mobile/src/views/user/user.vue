<template>
  <div class="user-box vant-style">
    <div class="user-info">
      <img src="@/assets/images/goods_default.png" alt />
      <div class="mg-l10">
        <div class="user-name">{{UserInfo.tid}}</div>
        <div class="user-class">简介：暂无简介</div>
      </div>
    </div>
    <div class="other-cell">
      <van-cell-group class="block-cell-g">
        <van-cell class="blcok-cell" title="阅读时长" icon="location-o" value="55分钟" />
        <van-cell class="blcok-cell" title="账号管理" icon="location-o" is-link />
        <van-cell class="blcok-cell" title="帮助中心" icon="location-o" is-link />
        <van-cell class="blcok-cell" title="设置" icon="location-o" is-link />
        <van-cell class="blcok-cell" title="关于我们" icon="location-o" is-link />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'user',
  data() {
    return {}
  },
  computed: {
    ...mapState(['UserInfo'])
  },
  created() {
    this.f.setTitle('我的')
  },
  methods: {
    toMyCourse() {
      this.$router.push('/user/my-course')
    },
    toMyTest() {
      this.$router.push('/user/test-question-detail')
    },
    toCourseReport() {
      this.$router.push('/user/course-report')
    },
    toMyFavorite() {
      this.$router.push('/user/my-favorite')
    },
    toMyNotes() {
      this.$router.push('/user/my-notes')
    }
  }
}
</script>
<style lang="scss">
.user-box {
  &.vant-style {
    .block-cell {
      .van-cell__title {
        span {
          font-size: 15px;
          color: #000;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.user-box {
  .user-info {
    height: 160px;
    background: linear-gradient(
      90deg,
      rgba(45, 167, 88, 1),
      rgba(59, 180, 92, 1)
    );
    color: #fff;
    display: flex;
    padding-left: 15px;
    padding-top: 40px;
    box-sizing: border-box;
    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 17px;
      margin-top: 6px;
    }
    .user-class {
      font-size: 13px;
    }
    > div {
      height: 55px;
    }
  }
  .other-cell {
    .o-count-box {
      display: flex;
      height: 85px;
      background: #fff;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
    }
    .oc-item {
      width: 33%;
      > div {
        text-align: center;
      }
      & > div:first-child {
        font-size: 20px;
        color: #000000;
      }
      & > div:last-child {
        font-size: 13px;
        color: #a8a8a8;
      }
    }
    .blcok-cell {
      border-radius: 10px;
    }
    .block-cell-g {
      border-radius: 10px;
    }
  }
}
</style>