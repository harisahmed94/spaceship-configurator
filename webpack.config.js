const currentTask = process.env.npm_lifecycle_event
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let cssHandler = "style-loader";
let isDev = true;
let devtool = "source-map";

if (currentTask == "build") {
  mode = "production";
  cssHandler = MiniCssExtractPlugin.loader;
  isDev = false;
  devtool = false;
}

const CSSModuleLoader = { loader: 'css-loader', options: { sourceMap: isDev, modules: {
  localIdentName: "[local]__[hash:base64:5]"
}, importLoaders: 2 } };

const CSSLoader = { loader: 'css-loader', options: { sourceMap: isDev, importLoaders: 2 } };

const SASSLoader = { loader: 'sass-loader', options: { sourceMap: isDev } };

const SASSResourcesLoader =   {loader: 'sass-resources-loader', options: {
  resources: [path.resolve(__dirname,'./src/styles/base/_variables.scss'), path.resolve(__dirname,'./src/styles/base/_mixins.scss')]
},};

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: mode,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devtool: devtool,
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
        test: /\.scss$/,
        use: [
            cssHandler,
            CSSModuleLoader,
            SASSLoader,
            SASSResourcesLoader
          ],
          include: /\.module\.scss$/
      },
      {
        test: /\.scss$/,
        use: [
            cssHandler,
            CSSLoader,
            SASSLoader,
            SASSResourcesLoader
          ],
        exclude: /\.module\.scss$/
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
  ],
}