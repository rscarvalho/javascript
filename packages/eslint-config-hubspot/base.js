module.exports = {
  extends: [
    'eslint-config-hubspot/legacy',
    'eslint-config-hubspot/rules/es6',
  ].map(require.resolve),
  rules: {}
};
