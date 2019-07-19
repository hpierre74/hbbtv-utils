module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '10',
        },
        useBuiltIns: 'usage',
        modules: false,
      },
    ],
  ],
  plugins: [
    ['lodash'],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-reserved-words',
  ],
};
