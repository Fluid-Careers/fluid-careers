module.exports = {
  extends: ['plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
  plugins: ['standard', 'react', 'jsx-a11y'],
  ignorePatterns: [
    'plugins/',
    'public/',
    'lib/',
    '.cache/',
    'node_modules/',
    'src/gatsby/',
    '*.bs.js',
    're/',
    'yarn*',
  ],
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and errors if missing
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  rules: {
    'no-var': 'error', // optional, recommended when using es6+
    'no-unused-vars': 'error', // recommended
    'arrow-spacing': ['error', { before: true, after: true }], // recommended
    strict: ['error', 'never'],
    // options to emulate prettier setup
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    // standard plugin - options
    'standard/object-curly-even-spacing': ['error', 'either'],
    'standard/array-bracket-even-spacing': ['error', 'either'],
    'standard/computed-property-even-spacing': ['error', 'even'],
    'standard/no-callback-literal': ['error', ['cb', 'callback']],
    // react plugin - options
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-sort-props': [
      1,
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-key': ['error'],
    'react/no-unknown-property': ['error'],
    'react/react-in-jsx-scope': ['error'],
    'eol-last': ['error'],
    'no-trailing-spaces': ['error'],
    'prefer-const': ['error'],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          modules: true,
        },
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:jsx-a11y/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
      rules: {
        // ts-ignore should be allowed so long as its usage is justified
        '@typescript-eslint/ban-ts-ignore': 'off',
        // ensure that Typescript types are marked as used
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
}
