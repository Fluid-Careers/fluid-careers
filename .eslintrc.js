// cf: https://decodenatura.com/set-up-react-native-typescript-eslint-prettier/
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
    'prettier/standard',
  ],
}
