module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'react-refresh',
    'import',
    'jsx-a11y'
  ],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  ignorePatterns: ['.*.js'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto'
      }
    ],
    'no-nested-ternary': 'off',
    'react/require-default-props': 'off',
    'spaced-comment': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^antd'], ['^@?\\w'], ['@/(.*)'], ['^[./]']]
      }
    ],
    'simple-import-sort/exports': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react-refresh/only-export-components': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ]
};
