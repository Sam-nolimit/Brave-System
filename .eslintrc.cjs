module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 0,
    // 'react-hooks/exhaustive-deps': 1,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'react/jsx-no-undef': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test.{ts,tsx}', // repos with a single test file
          'test-*.{ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.ts', // jest config
          '**/jest.setup.ts', // jest setup
        ],
        optionalDependencies: "true",
      },
    ],
  },
};
