const path = require("path");
const workboxPlugin = require("workbox-webpack-plugin");

const dist = __dirname + "/dist";

module.exports = {
  entry: {
    app: "./src/sw.js"
  },
  output: {
    filename: "./src/[name].bundle.js",
    path: path.resolve(".")
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js)/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      }
    ],
    plugins: [
      new workboxPlugin({
        globDirectory: dist,
        globPatterns: ["**/*.{html,js}"],
        swDest: dist + "/sw.js"
      })
    ]
  }
};
