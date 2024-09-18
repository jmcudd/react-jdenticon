const presets = ["@babel/preset-env", "@babel/preset-react"];
module.exports = {
  env: {
    esm: {
      presets,
      plugins: [],
    },
    cjs: {
      presets,
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
    umd: {
      presets,
      plugins: [
        "@babel/plugin-transform-modules-umd",
        [
          "@babel/plugin-transform-runtime",
          {
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
      ],
    },
  },
};
