import request from "@/utils/request"

export async function getMethods (params) {
  return request('/j/app/radio/channels', {
    method: 'get',
    data: params
  })
}