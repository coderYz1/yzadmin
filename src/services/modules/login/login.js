import loginrequest from '../../request/index'

export default function loginPost(account) {
  return loginrequest.post({
    url: '/login',
    data: account
  })
}
