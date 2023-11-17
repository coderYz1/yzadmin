<script setup>
import { useLoginStore } from '@/stores/login/login'
const loginSrote = useLoginStore()
const menuData = loginSrote.userMenu
</script>

<template>
  <div class="menu-container">
    <div class="title-container">
      <img class="logo" src="@/assets/img/logo.svg" alt="" />
      <h3 class="title">后台管理系统</h3>
    </div>

    <div class="menu">
      <el-menu
        default-active="39"
        background-color="#001529"
        text-color="#b7bdc3"
        active-text-color="#ffffff"
      >
        <template v-for="item in menuData" :key="item.id">
          <el-sub-menu :index="String(item.id)">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="iten in item.children" :key="iten.id">
              <el-menu-item :index="String(iten.id)">
                {{ iten.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item index="1-1">核心技术</el-menu-item>
          <el-menu-item index="1-2">商品统计</el-menu-item>
        </el-sub-menu> -->
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  width: 100%;
  height: 100%;

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    .logo {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  }
}
.el-menu {
  border-right: none;
}
.el-menu-item {
  padding-left: 50px !important;
  background-color: #0c2135;
}
.el-menu-item:hover {
  color: #fff;
}
.el-menu-item.is-active {
  background-color: #0a60bd;
}
</style>
