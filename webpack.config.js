const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/umd"),
    filename: "index.js",
    library: "Jdenticon",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "prop-types": "PropTypes",
    jdenticon: "jdenticon",
  },
};
