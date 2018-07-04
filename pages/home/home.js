Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    currentTab: 0,
    current: 0
	},
  /**
   * 分享
   */
  onShareAppMessage: function() {
  },
  /**
   * 切换tab
   */
  changeTab: function (e) {
    var id = Number(e.currentTarget.id);
    this.setData({
      currentTab: id,
      current: id,
    });
    console.log(this.data.current);
  },
  currentChange: function (e) {
    var id = Number(e.detail.current);
    this.setData({
      currentTab: id,
      current: id,
    });
  }
})