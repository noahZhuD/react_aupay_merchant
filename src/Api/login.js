import service from '@/Utils/axios'

export function LoginApi(data) {
  return service({
    url: '/api/merchant/login',
    method: 'post',
    data
  })
}