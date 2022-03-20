const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
        { 
          test: /\.(ts|tsx)$/, 
          exclude: /node_modules/, 
          use: ["babel-loader"] 
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.scss$/,
        use: [
            //'style-loader'
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true, modules: {
                localIdentName: "[local]__[hash:base64:5]"
            }, importLoaders: 1 } },
            { loader: 'sass-loader', options: { sourceMap: true } },
            {loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname,'./src/styles/base/_variables.scss'), path.resolve(__dirname,'./src/styles/base/_mixins.scss')]
            },}
          ],
          include: /\.module\.scss$/
      },
      {
        test: /\.scss$/,
        use: [
            // 'style-loader',
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
            { loader: 'sass-loader', options: { sourceMap: true} },
            {loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname,'./src/styles/base/_variables.scss'), path.resolve(__dirname,'./src/styles/base/_mixins.scss')]
            },}
          ],
        exclude: /\.module\.scss$/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
  ],
}