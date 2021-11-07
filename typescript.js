module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  settings: {
    'import/resolver': 'typescript',
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',

    // Disable requiring return types because it's too easy to broaden them by accident.
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // The stock `no-unused-vars` ESlint rule doesn't play with TS.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
