<script setup>
import { reactive } from 'vue'
const phone = reactive({
  phoneNum: '',
  phoneVfc: ''
})
</script>

<template>
  <el-form :model="phone">
    <el-form-item size="large" label="手机号" label-width="60px">
      <el-input v-model="phone.phoneNum" />
    </el-form-item>

    <div class="verificationCode">
      <el-form-item size="large" label="验证码" label-width="60px">
        <el-input v-model="phone.phoneVfc" />
      </el-form-item>
      <el-button class="vfcBtn" size="large" type="primary">
        发送验证码
      </el-button>
    </div>
  </el-form>
</template>

<style scoped>
.verificationCode {
  display: flex;
  justify-content: space-between;
  .vfcBtn {
    width: 85px;
    margin-left: 5px;
  }
}
</style>
