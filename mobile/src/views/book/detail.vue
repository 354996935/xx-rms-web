<template>
  <div class="book-detail-box">
    <bookItemRow mod="2"></bookItemRow>
  </div>
</template>
<script>
import bookItemRow from '@/components/book/item-row'
export default {
  name: 'bookDetail',
  components: {
    bookItemRow
  },
  created() {
    this.f.setTitle('图书')
  }
}
</script>
<style lang="scss" scoped>
.book-detail-box {
  padding: 0 15px;
}
</style>