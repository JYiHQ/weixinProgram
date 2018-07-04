//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentLabel: null,
    labelArr: [
      {
        url: '../assets/icons/paid.png',
        name: '待支付',
      },
      {
        url: '../assets/icons/delivery.png',
        name: '待发货',
      },
      {
        url: '../assets/icons/received.png',
        name: '待收货',
      },
      {
        url: '../assets/icons/finished.png',
        name: '交易完成',
      }
    ],
    tabArr: [
      {
        url: '../assets/icons/shopping.png',
        btnUrl: '../assets/icons/jiantouyou.png',
        name: '我的团购',
      },
      {
        url: '../assets/icons/coupon.png',
        btnUrl: '../assets/icons/jiantouyou.png',
        name: '我的优惠券',
      },
      {
        url: '../assets/icons/clock.png',
        btnUrl: '../assets/icons/jiantouyou.png',
        name: '我的足迹',
      }
    ],
    tabArr1: [
      {
        url: '../assets/icons/addFriend.png',
        btnUrl: '../assets/icons/jiantouyou.png',
        name: '邀请好友领券',
      },
      {
        url: '../assets/icons/location.png',
        btnUrl: '../assets/icons/jiantouyou.png',
        name: '地址管理',
      },
      {
        url: '../assets/icons/service.png',
        btnUrl: '../assets/icons/jiantouyou.png',
        name: '联系客服',
      }
    ]
	},
	//事件处理函数
	bindViewTap: function () {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
  // 获取用户信息
	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
      console.log(app.globalData.userInfo)
      // 检查session是否有效
      wx.login({
        success: res => {
          console.log(res.code);
          if (res.code) {
            wx.request({
              url: 'http://localhost:3000/login',
              data: {
                code:res.code
              }
            })
          }
        },
      })
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},
  jumpOrdersPage: function (e) {
    this.setData({
      currentLabel: e.currentTarget.id
    })
    wx.navigateTo({
      url: '../ordersDetails/orders',
    })
  }
})