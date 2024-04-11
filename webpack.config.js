const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },

  // Added code to support wireframes
  devServer: {
    contentBase: path.join(__dirname, 'wireframes'),
    compress: true,
    port: 9000
  }
};
