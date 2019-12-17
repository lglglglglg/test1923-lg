
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
// http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=FEC29890F3EF11E9BD0C0DBC46FFCEF19842C84A1DA74AC7B8D59A10357AB56C&optimus_risk_level=71&optimus_code=10

  devServer: {
    proxy: {
      '/hehe': {
        target: 'http://m.maoyan.com', // 请求的目标路径
        changeOrigin: true, //允许改变请求源
        pathRewrite: {
          "^/hehe": ''  //路径重新
        }
      },
      // '/haha': {
      //   target: 'https://u.y.qq.com', // 请求的目标路径
      //   changeOrigin: true, //允许改变请求源
      //   pathRewrite: {
      //     "^/haha": ''  //路径重新
      //   }

      // }
    }

  },
  chainWebpack: (config) => {
    // 起别名
    config.resolve.alias
      .set('style', resolve('./src/style'))
      .set('views', resolve('./src/views'))
      .set('components', resolve('./src/components'))
      .set('utils', resolve('./src/utils'))
      .set('api', resolve('./src/api'))
  }
}
// http://ustbhuangyi.com/music/api/getTopBanner?  path
//  locahost:8080/hehe/music/api/getTopBanner? 
//  http://ustbhuangyi.com/music/api