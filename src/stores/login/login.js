import { defineStore } from 'pinia'
import loginPost from '@/services/modules/login/login'

export const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    name: '',
    token: localStorage.getItem('token') ?? ''
  }),
  actions: {
    async processLoginData(account) {
      const loginData = await loginPost(account)
      this.id = loginData.data.id
      this.name = loginData.data.name
      this.token = loginData.data.token
      localStorage.setItem('token', this.token)
      console.log(loginData.data)
    }
  }
})
