const AllIconName = require('../image/base64/index.js')
Page({
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
    containerList: [
      {
        iconName: AllIconName.faceicon,
        title: '我要办照',
        des: '人脸识别办照',
        iconName1: AllIconName.complainticon,
        title1: '举报投诉',
        des1: '快速反馈信息',
      },
    ]
  },
  onLoad() {
    console.log(AllIconName)
  }
})