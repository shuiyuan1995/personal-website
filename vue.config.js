/*eslint-disable*/
const path = require('path');
const debug = process.env.NODE_ENV !== 'production' ? true : false;

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  
  // 打包资源路径
  baseUrl: debug ? '/' : './',

  productionSourceMap: false,

  lintOnSave: undefined,
  
  chainWebpack: config => {
    config.resolve.alias
    .set("@", resolve("src"))
    .set("@common", resolve("src/common"))
    .set("@components", resolve("src/components"))
    .set("@router", resolve("src/router"))
    .set("@store", resolve("src/store"))
    .set("@images", resolve("src/common/images"))
    .set("@views", resolve("src/views"))
  }
}
