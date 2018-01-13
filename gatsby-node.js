//exports.modifyWebpackConfig = ({
//  config,
//  stage
//}) => {
//  const imageLoader = stage !== 'develop' 
//    ? 'file?name=[name]-[hash].[ext]'
//    : 'file'
//
//  config.removeLoader('images')
//  config.loader('images', {
//    test: /\.(jpe?g|png)(\?.*)?$/i,
//    loader: 'file-loader'
//  })
//
//  return config
//}
