/*
 * @Author: liuxia
 * @Date: 2019-01-13 22:05:44
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-13 22:06:47
 */

const mockDataUser = {
  login: {
    'reqId': null,
    'code': '0',
    'message': 'liuxia',
    'data': {
      'sessionId': 'MTM2MA=='
    }
  },
  userInfo: {
    'reqId': null,
    'code': '0',
    'message': 'liuxia',
    'data': {
      'userId': 1360,
      'organizationId': 1,
      'userName': null,
      'name': '留下',
      'roleId': null,
      'jobTitle': null,
      'password': '7c4a8d09ca3762af61e59520943dc26494f8941b',
      'areaName': null,
      'mobile': '15158864844',
      'gender': null,
      'picUrl': null,
      'cardType': null,
      'cardNo': null,
      'cardAddrProvinceId': null,
      'cardAddrCityId': null,
      'cardAddrRegionId': null,
      'cardAddrDetail': null,
      'addrProvinceId': null,
      'addrCityId': null,
      'addrRegionId': null,
      'addrDetail': null,
      'email': null,
      'weixin': null,
      'qq': null,
      'type': 3,
      'status': 1,
      'isAdmin': 1,
      'sessionId': '0',
      'parentId': null,
      'lastDevId': null,
      'lastLoginDate': '2018-09-17 10:28:21',
      'thisLoginDate': '2018-09-17 10:43:34',
      'authentication': 0,
      'authenticationSource': null,
      'manageFinanceHouseType': null,
      'isDelete': 0,
      'gmtCreateId': 61,
      'gmtCreate': '2018-02-09 16:53:43',
      'gmtModifiedId': 61,
      'gmtModified': '2018-09-17 10:43:34',
      'unLookCount': null,
      'serverStatus': null
    }
  },
  logout: {
    'reqId': null,
    'code': '0',
    'message': 'liuxia',
    'data': {}
  }
}

export default {
  login: () => {
    return mockDataUser.login
  },
  getUserInfo: () => {
    return mockDataUser.userInfo
  },
  logout: () => {
    return mockDataUser.logout
  }
}
