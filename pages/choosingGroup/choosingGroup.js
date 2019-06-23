Page({
  groupView: function(){
    wx.navigateTo({
      url: '../group-view/group-view',
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  data: {
    payment: 100,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://media1.popsugar-assets.com/files/thumbor/jHfmIJteIm11bxFRxZLoXBFy3m4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/12/28/846/n/1922729/02f8b6105c26771fc830f0.52460620_/i/Workout-Plan-Women.jpg'
    }, {
      id: 1,
      type: 'image',
        url: 'https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/barber-169hero-teachtext-twenty20.jpg',
    }, {
      id: 2,
      type: 'image',
        url: 'https://cdn.lifehack.org/wp-content/uploads/2019/01/how-to-start-eating-healthy.jpeg'
    }, {
      id: 3,
      type: 'image',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCXGf3rL6q6mNdA0R-ElPUnxBZZM3k9rDMxY-w1u02HzYsLMkGQ'
    }, {
      id: 4,
      type: 'image',
        url: 'https://pacepharmacy.com/wp-content/uploads/2019/03/quitting-smoking.jpg'
    }, {
      id: 5,
      type: 'image',
        url: 'https://static01.nyt.com/images/2017/09/22/smarter-living/any-questions-relationships-1506114860613/any-questions-relationships-1506114860613-superJumbo.jpg'
    }, {
      id: 6,
      type: 'image',
        url: 'https://media.beliefnet.com/~/media/photos-with-attribution/inspiration/woman-breathe-meditate-health-yoga-beach_credit-shutterstock.jpg?as=1&w=400'
    },
      {
        id: 7,
        type: 'image',
        url: 'http://ourmomentoftruth.com/wp-content/uploads/2016/12/parent-quit-drinking.jpg'
      }
    ],
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})