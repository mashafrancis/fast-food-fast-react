const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Required by babel-preset-react-app
process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index", // Default, so can omit.
  output: {
    path: path.resolve(__dirname, "build"), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/", // Necessary so historyApiFallback works
    filename: "bundle.js"
  },
  optimization: {
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'development',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    },
    noEmitOnErrors: true,
    checkWasmTypes: true,
    minimize: true,
  },
  devServer: {
    // Options: https://webpack.js.org/configuration/dev-server/
    stats: "minimal", // output minimal stats to command line
    overlay: true, // overlay errors in browser
    historyApiFallback: true, // load deep links
    // Last 3 lines necessary to avoid console errors in Chrome: https://github.com/webpack/webpack-dev-server/issues/851#issuecomment-449550071
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    // Note that because the plugin does a direct text replacement, the value given to it must include actual quotes inside of the string itself.
    // Typically, this is done either with alternate quotes, such as '"production"', or by using JSON.stringify('production').
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3000")
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // Processed bottom up, so eslint-loader should be last.
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            "loader": 'file-loader',
            "options": {},
          },
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules']
  }
};
