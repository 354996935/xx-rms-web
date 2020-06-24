<template>
  <div class="book-item-row" :class="{'mod-2': mod == '2'}">
    <img src="https://img.tehui17.com/upload/2019-08-14/5d53c7fe34baae08e0000e1f.png" alt />
    <div class="txt-info">
      <div class="list-item-top">
        <div class="book-name">巴黎圣母院</div>
        <div class="pf mg-t5">
          <span>5星</span>
          <span>8.0</span>
        </div>
        <div class="cbs mg-t5">[法]雨果 / 1997 / 南海出版社</div>
      </div>
      <div v-show="mod == '1'">
        <van-tag color="#68AD8C" class="mg-r10">5扩展文章</van-tag>
        <van-tag color="#DFB346">22笔记</van-tag>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mod: {
      type: String,
      default: '1'
    }
  }
}
</script>
<style lang="scss" scoped>
.book-item-row {
  display: flex;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 0.5px solid #f2f2f2;
  &.mod-2 {
    img {
      width: 100px;
      height: 140px;
    }
    .txt-info {
      height: 140px;
    }
    .book-name {
      font-size: 24px;
      color: #fff;
    }
  }
  img {
    width: 80px;
    height: 110px;
    border-radius: 6px;
  }
  .txt-info {
    height: 110px;
    display: flex;
    flex-direction: column;
    margin-left: 17px;
    justify-content: space-between;
  }
  .book-name {
    font-size: 17px;
    font-weight: 600;
    color: #000;
  }
  .pf {
    color: #808080;
    font-size: 11px;
  }
  .cbs {
    font-size: 13px;
    color: #808080;
  }
}
</style>