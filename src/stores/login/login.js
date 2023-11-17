import { defineStore } from 'pinia'
import loginPost from '@/services/modules/login/login'
import { loginGetuser } from '@/services/modules/login/login'
import { loginRole } from '@/services/modules/login/login'

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: localStorage.getItem('token') ?? '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? {},
    userMenu: JSON.parse(localStorage.getItem('userMenu')) ?? []
  }),
  actions: {
    async processLoginData(account) {
      //登录获取token
      const loginData = await loginPost(account)
      this.token = loginData.data.token
      localStorage.setItem('token', this.token)
      localStorage.setItem('id', loginData.data.id)

      //获取角色信息
      const userData = await loginGetuser(localStorage.getItem('id'))
      this.userInfo = userData.data
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
      //获取角色菜单树
      const roleData = await loginRole(localStorage.getItem('id'))
      this.userMenu = roleData.data
      localStorage.setItem('userMenu', JSON.stringify(this.userMenu))

      console.log(loginData.data)
      console.log(userData.data)
      console.log(roleData.data)
    }
  }
})
