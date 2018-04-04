const path = require('path');

export default () => (
  {
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "wof.js",
      libraryTarget: 'umd',
      libraryExport: 'default',
      library: 'WheelOfFortune'
    },
    externals: {},
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test:/\.(s*)css$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }]
    }
  }
);
