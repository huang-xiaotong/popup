class Popup {
  constructor(context, data) {
    this.page = context;
    this.init(data);
    this.page.popupLeft = this.popupLeft.bind(this);
    this.popupLeft = data.popupLeft;
    this.page.popupRight = this.popupRight.bind(this);
    this.popupRight = data.popupRight;
  }
  init(data) {
    let popupImg = data.showImg ? data.imgUrl : '';
    let showBtn = data.showBtn ? data.showBtn : true;
    let popupWidth = data.popupWidth ? data.popupWidth : '543rpx';
    let popupHeight = data.popupHeight ? data.popupHeight : '537rpx';
    let popupBg = data.popupBg ? data.popupBg : '#ffb400';
    this.page.ani = wx.createAnimation({
      duration: 200, //动画时长
      timingFunction: "ease", //线性
      delay: 0 //0则不延迟
    });
    this.page.ani.scaleX(1).step();
    this.page.setData({
      popupDis: data.popupDis,
      popupImg,
      leftBtn: data.leftBtn,
      rightBtn: data.rightBtn,
      showImg: data.showImg,
      showBtn,
      conText: data.conText,
      popupWidth,
      popupHeight,
      popupBg,
    })
    setTimeout(()=>{
      this.page.setData({
        temConAni: this.page.ani.export()
      })
    },200)
  }
}
Popup.prototype.popupLeft = function () {
  this.page.ani.scaleX(0).step();
  this.page.setData({
    temConAni: this.page.ani.export()
  })
  setTimeout(() => {
    this.page.setData({
      popupDis: 'none'
    })
  }, 200)
  if (this.popupLeft) {
    this.popupLeft();
  }
}
Popup.prototype.popupRight = function(){
  this.page.ani.scaleX(0).step();
  this.page.setData({
    temConAni: this.page.ani.export()
  })
  setTimeout(() => {
    this.page.setData({
      popupDis: 'none'
    })
  }, 200)
  if (this.popupRight) {
    this.popupRight();
  }
}
module.exports = {
  Popup
}