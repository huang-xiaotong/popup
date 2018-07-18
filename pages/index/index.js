// pages/modal/index.js
import { Popup } from "../template/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    widthChange:'100rpx'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  openModal:function(){
    let popup = new Popup(this, {
      popupDis: 'flex',
      popupWidth: '643rpx',
      showImg: true,
      imgUrl:'/images/2.png',
      conText: 'aaaa\nbbbbb',
      showBtn: true,
      leftBtn: '取消',
      rightBtn: '确定',
      popupLeft: () => {
        console.log('点击左边按钮');
      },
      popupRight: () => {
        console.log('点击右边按钮');
      }
    })
  },
  openModal2: function () {
    let popup = new Popup(this, {
      popupDis: 'flex',
      popupWidth: '443rpx',
      showImg: false,
      conText: 'aaaa\nbbbbb',
      showBtn: true,
      leftBtn: '取消',
      rightBtn: '确定',
      popupLeft: () => {
        console.log('点击左边按钮2');
      },
      popupRight: () => {
        console.log('点击右边按钮2');
      }
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