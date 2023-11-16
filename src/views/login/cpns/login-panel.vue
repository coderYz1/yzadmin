<script setup>
import accountPanel from '@/views/login/cpns/account-panel.vue'
import { ref, watch } from 'vue'

//是否记住密码
const rememberPwd = ref(localStorage.getItem('rememberPwd') === 'true')
//保存记住密码选项
watch(rememberPwd, (newValue) => {
  localStorage.setItem('rememberPwd', newValue)
  console.log(rememberPwd.value)
})
//当前页面
const currentPage = ref('account')

//组件实例
const accountComponent = ref()

// 登录按钮
function lognBtn() {
  if (currentPage.value === 'account') {
    console.log('账号密码登录')
    accountComponent.value.loginActico(rememberPwd.value)
  } else {
    console.log('手机验证码登录')
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="title-container">
        <h1 class="title">后台管理系统</h1>
      </div>

      <el-tabs v-model="currentPage" type="border-card" stretch>
        <el-tab-pane name="account">
          <template #label>
            <el-icon class="icon">
              <UserFilled />
            </el-icon>
            <span>账号登录</span>
          </template>
          <accountPanel ref="accountComponent"></accountPanel>
        </el-tab-pane>

        <el-tab-pane name="phone">
          <template #label>
            <el-icon class="icon">
              <Iphone />
            </el-icon>
            <span>手机登录</span>
          </template>
        </el-tab-pane>
      </el-tabs>

      <div class="bottom-container">
        <el-checkbox v-model="rememberPwd" label="记住密码" size="large" />
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button @click="lognBtn" class="login-btn" type="primary"
        >登录</el-button
      >
    </div>
  </div>
</template>

<style scoped>
.login-container {
  background-image: url('@/assets/img/login-bg.svg');
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-panel {
    width: 360px;
    height: 360px;
    .title {
      text-align: center;
    }
  }
  .bottom-container {
    display: flex;
    justify-content: space-between;
  }
  .icon {
    position: relative;
    right: 5px;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
