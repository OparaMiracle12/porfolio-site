const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "scripts/[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  devtool: "source-map",

  devServer: {
    contentBase: "/",
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.(png|gif|svg|jpe?g)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
            publicPath: "/",
          },
        },
      },

      {
        test: /\.html$/,
        use: { loader: "html-loader" },
      },

      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
            publicPath: "/",
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssests: false,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
  ],
};
