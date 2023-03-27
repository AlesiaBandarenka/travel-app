module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  // coverageThreshold: {
  //   global: { statements: 30 },
  // },
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
  },
};
