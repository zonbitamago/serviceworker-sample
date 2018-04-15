const path = require("path");
const workboxPlugin = require("workbox-webpack-plugin");

const dist = __dirname + "/dist";

module.exports = {
  entry: {
    app: "./src/app.js",
    sw: "./src/sw.js"
  },
  output: {
    filename: "./[name].bundle.js"
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
    ]
  }
  // plugins: [
  //   new workboxPlugin.InjectManifest({
  //     swSrc: "./src/sw.js"
  //   })
  // ]
};
