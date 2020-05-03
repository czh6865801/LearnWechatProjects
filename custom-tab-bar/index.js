Component({ 
  data: {
    current: 0,
    color: "#7A7E83",
    borderStyle: "white",
    selectedColor: "#ff5722d1",
    list: [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/pages/image/png/PageIndex.png",
        "selectedIconPath": "/pages/image/png/PageIndexSelect.png",
        dot: true
      },
      {
        "pagePath": "/pages/myself/index",
        "text": "我的",
        "iconPath": "/pages/image/png/MyIcon.png",
        "selectedIconPath": "/pages/image/png/MyIconSelect.png",
        "badge": "New"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      console.log(this,e)
      const index = e.currentTarget.dataset.index
      wx.switchTab({
        url: this.data.list[index].pagePath
      })
      this.setData({
        current: index
      })
    }
  }
})