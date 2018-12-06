import path from 'path'
import webpack from 'webpack'


const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ['react-hot-loader/babel']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: 'css-loader/locals'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      } 
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080,
    inline: true,
    hot: true,
    open: true,
    watchContentBase: true
  }
}

export default config
