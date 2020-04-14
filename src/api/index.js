import request from './request'

/**
 * kind页全部数据接口
 */
export function getKindAllList (params) {
  return request({
    url: '/pro/AllPros',
    method: 'get',
    params
  })
}
/**
 * register页注册接口
 */
export function register (params) {
  return request({
    url: '/users/register',
    method: 'post',
    data: params
  })
}
