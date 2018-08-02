// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 输入监听
   */
  searchInputAction: function (e) {
      console.log(e)
      let that = this 
      let value = e.detail.value
      if (value.length == 0) {
        this.setData({
          searchResultDatas: []
        })
        return
      }
    wx.request({
      url: 'https://gank.io/api/search/query/' + value + '/category/all/count/10/page/1',
      data: '',
      success: function (res) { 
        console.log(res)
        let searchData = res.data.results.map(function(res){
          return { key: value,name:res.desc}
        })
        that.setData({
          searchData,
          searchResultDatas: res.data.results 
        })
      },
      fail: function (res) { },
    })
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
  
  }
})