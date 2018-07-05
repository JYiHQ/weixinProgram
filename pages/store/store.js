Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		labelArr: [
      { name: '为您推荐', type: 10, id: 0 },
      { name: '面部护理', type: 20, id: 1 },
      { name: '身体护理', type: 30, id: 2 },
      { name: '生活用品', type: 40, id: 3 },
      { name: '底妆彩妆', type: 50, id: 4 },
      { name: '美发护发', type: 60, id: 5 },
      { name: '母婴用品', type: 70, id: 6 }
    ],
    currentTab:0,
    tabArr: [
      { name: '保税发货', type: 80, id: 0 },
      { name: '全部商品', type: 90, id: 1 },
    ]
	},
  changeCurrentTab(e) {
    const id = Number(e.currentTarget.id);
    this.setData({
      currentTab: id,
    });
  }
})
