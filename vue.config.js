const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      // 需要重启 IDE
      .set('imgs',resolve('src/assets/imgs'))
      .set('components',resolve('src/components'))
      .set('views',resolve('src/views'))
      // .set('imgs',resolve('src/assets/imgs'))
  }
};