module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': ['error', 'never'],
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: ['viewBox']
      }
    ],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off'
    // 'space-before-function-paren': [
    //   'error',
    //   {
    //     anonymous: 'never',
    //     named: 'never',
    //     asyncArrow: 'always'
    //   }
    // ],
    // 'vue/array-bracket-spacing': 'error',
    // 'vue/arrow-spacing': 'error',
    // 'vue/block-spacing': 'error',
    // 'vue/brace-style': 'error',
    // 'vue/camelcase': 'error',
    // 'vue/comma-dangle': 'error',
    // 'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // 'vue/eqeqeq': 'error',
    // 'vue/key-spacing': 'error',
    // 'vue/match-component-file-name': 'error',
    // 'vue/object-curly-spacing': 'error',
    // semi: ['error', 'always', { omitLastInOneLineBlock: true }]
  },
  overrides: [
    {
      files: ['**/*.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
