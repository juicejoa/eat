module.exports = {
  devServer: {
    proxy: 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/'
  },
  chainWebpack: config => {
    config.plugin.delete('prefetch'); //prefetch 삭제
  }
}
