<script setup>
import router from '@/router'

function exitLogin() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <el-button @click="exitLogin">退出登陆</el-button>
</template>

<style scoped></style>
