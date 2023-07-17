import request from '@/utils/request'

// 查询生产厂家信息列表
export function listFactory(query) {
  return request({
    url: '/system/factory/list',
    method: 'get',
    params: query
  })
}

// 查询生产厂家信息详细
export function getFactory(factoryId) {
  return request({
    url: '/system/factory/' + factoryId,
    method: 'get'
  })
}

// 新增生产厂家信息
export function addFactory(data) {
  return request({
    url: '/system/factory',
    method: 'post',
    data: data
  })
}

// 修改生产厂家信息
export function updateFactory(data) {
  return request({
    url: '/system/factory',
    method: 'put',
    data: data
  })
}

// 删除生产厂家信息
export function delFactory(factoryId) {
  return request({
    url: '/system/factory/' + factoryId,
    method: 'delete'
  })
}
