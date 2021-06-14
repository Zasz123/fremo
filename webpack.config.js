const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: path.join(__dirname, "src", "index.tsx"),
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    contentBase: "./src",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpg|jpeg)/,
        loader: "url-loader",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(mode),
      },
    }),
    new Dotenv({
      path: "./.env",
      safe: true,
    }),
  ],
};
