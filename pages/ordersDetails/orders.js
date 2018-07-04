Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: null,
    tabItem: ['全部订单', '待支付', '待发货', '待收货', '交易完成'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var arr = getCurrentPages();
    var id = Number(arr[arr.length - 2].data.currentLabel);
    this.setData({
      currentTab: id + 1,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  // 返回上一个页面
  backPage: function () {
    wx.navigateBack();
  },
  changeTab: function (e) {
    var id = Number(e.currentTarget.id);
    this.setData({ currentTab: id });
  }
})