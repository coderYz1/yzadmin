<script setup>
import { reactive, ref } from 'vue'
import { useLoginStore } from '@/stores/login/login'
import router from '@/router'

const loginStore = useLoginStore()
// 账号密码数据
const account = reactive({
  name: localStorage.getItem('name') ?? '',
  password: localStorage.getItem('password') ?? ''
})

const formInstance = ref()
// 表单校验规则
const rules = reactive({
  name: [
    { required: true, message: '必须输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
})

//登录逻辑
function loginActico(rememberPwd) {
  formInstance.value.validate((value) => {
    if (value) {
      const name = account.name
      const password = account.password

      //通过pinia发送网络请求
      loginStore.processLoginData({ name, password }).then((res) => {
        //是否记住密码
        if (rememberPwd === false) {
          localStorage.removeItem('name')
          localStorage.removeItem('password')
        } else {
          localStorage.setItem('name', name)
          localStorage.setItem('password', password)
        }
        router.push('/main')
      })
    } else {
      ElMessage.error('Oops, 请输入正确的账号密码.')
    }
  })
}

defineExpose({
  loginActico
})
</script>

<template>
  <el-form
    ref="formInstance"
    :rules="rules"
    :model="account"
    label-width="60px"
  >
    <el-form-item label="账号" size="large" prop="name">
      <el-input v-model="account.name" clearable />
    </el-form-item>

    <el-form-item label="密码" size="large" prop="password">
      <el-input v-model="account.password" show-password clearable />
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
