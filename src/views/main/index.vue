<script setup>
import mainMenu from '@/components/main-menu/main-menu.vue'
</script>

<template>
  <div class="common-layout">
    <el-container class="all-container">
      <el-aside class="aside-container" width="200px">
        <mainMenu></mainMenu>
      </el-aside>
      <el-container>
        <el-header class="header-container">Header</el-header>
        <el-main class="main-container"> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  width: 100%;
  height: 100%;
  .all-container {
    width: 100%;
    height: 100%;
  }
}
/* 隐藏侧边栏滚动条 */
.aside-container::-webkit-scrollbar {
  width: 0 !important;
}
.aside-container {
  background-color: #001529;
}
.header-container {
  background-color: pink;
}
.main-container {
  background-color: rebeccapurple;
}
</style>
