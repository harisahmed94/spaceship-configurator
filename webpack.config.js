const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CSSModuleLoader = { loader: 'css-loader', options: { sourceMap: true, modules: {
  localIdentName: "[local]__[hash:base64:5]"
}, importLoaders: 2 } };

const CSSLoader = { loader: 'css-loader', options: { sourceMap: true, importLoaders: 2 } };

const SASSLoader = { loader: 'sass-loader', options: { sourceMap: true } };

const SASSResourcesLoader =   {loader: 'sass-resources-loader', options: {
  resources: [path.resolve(__dirname,'./src/styles/base/_variables.scss'), path.resolve(__dirname,'./src/styles/base/_mixins.scss')]
},};



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
            'style-loader',
            // MiniCssExtractPlugin.loader,
            CSSModuleLoader,
            SASSLoader,
            SASSResourcesLoader
          ],
          include: /\.module\.scss$/
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            // MiniCssExtractPlugin.loader,
            CSSLoader,
            SASSLoader,
            SASSResourcesLoader
          ],
        exclude: /\.module\.scss$/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    // new MiniCssExtractPlugin({
    //     filename: '[name].css',
    //     chunkFilename: '[id].css',
    // }),
  ],
}