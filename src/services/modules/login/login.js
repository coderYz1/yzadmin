import loginrequest from '../../request/index'
//登录
export default function loginPost(account) {
  return loginrequest.post({
    url: '/login',
    data: account
  })
}
//获取角色信息
export function loginGetuser(id) {
  return loginrequest.get({
    url: `/users/${id}`,
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
}
//获取角色菜单树
export function loginRole(id) {
  return loginrequest.get({
    url: `/role/${id}/menu`,
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
}
