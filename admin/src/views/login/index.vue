<template>
  <div class="login-form">
    <el-form label-position="right" label-width="80px" :model="form">
      <el-form-item label="酷校id">
        <el-input v-model.number="form.kuxiao_uid"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
import { LOGIN } from '@/api/user'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      form: {
        kuxiao_uid: 151,
      }
    }
  },
  methods: {
    ...mapActions(['GetUserInfo']),
    login() {
      this.GetUserInfo(this.form).then(rs => {
        if (rs !== -1) {
          this.$router.push('/myCourseLib')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-form {
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
  width: 400px;
}
</style>