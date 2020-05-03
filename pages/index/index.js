const AllIconName = require('../image/base64/index.js')
Component({
  data: {
    background: [{
        url: 'http://img4.imgtn.bdimg.com/it/u=280538008,469035030&fm=26&gp=0.jpg',
        des: '111'
      },
      {
        url: 'http://img4.imgtn.bdimg.com/it/u=1664133777,2632814243&fm=26&gp=0.jpg',
        des: '222'
      },
      {
        url: 'http://img5.imgtn.bdimg.com/it/u=2486233385,2229376018&fm=26&gp=0.jpg',
        des: '333'
      }
    ],
    containerList: [{
        iconName: AllIconName.faceicon,
        title: '我要办照',
        des: '人脸识别办照',
      },
      {
        iconName: AllIconName.complainticon,
        title: '举报投诉',
        des: '快速反馈信息',

      },
      {
        iconName: AllIconName.faceicon,
        title: '我要办照',
        des: '人脸识别办照',

      },
      {
        iconName: AllIconName.complainticon,
        title: '举报投诉',
        des: '快速反馈信息',

      },
      {
        iconName: AllIconName.complainticon,
        title: '举报投诉',
        des: '快速反馈信息',

      }
    ]
  },
  methods: {
    onLoad() {
      let a = this.data.containerList;
      if (a.length !== 0) {
        a.forEach((val, index) => {
          if (index % 2 === 0) {
            val.cardinalNumber = true
          } else {
            val.cardinalNumber = false
          }
        })
      }
      this.setData({
        containerList: a
      })
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          current: 0
        })
      }
    }
  }
})