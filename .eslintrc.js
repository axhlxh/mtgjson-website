module.exports = {
  parser: 'vue-eslint-parser',
  // Allow Node style require and other node-based functions
  env: {
    node: true,
    commonjs: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    // Rules to ignore
    'vue/require-prop-types': 'off',
    'no-use-before-define': 'off', // Vuepress has hidden logic
    'no-case-declarations': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-empty': 'off',
    // Rules to warn
    indent: ['warn', 2],
    // Rules to error
    curly: 'error',
    'semi-spacing': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-multi-spaces': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
  },
};