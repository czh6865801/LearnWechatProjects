Component({ 
  data: {
    selected: 0,
    color: "#7A7E83",
    borderStyle: "white",
    selectedColor: "#ff5722d1",
    list: [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/pages/image/png/PageIndex.png",
        "selectedIconPath": "/pages/image/png/PageIndexSelect.png",
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
      console.log(e)
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})