import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '*.*',
    '!eslint.config.js',
  ],
  javascript: {
    overrides: {
      'no-console': [
        'warn',
        {
          allow: [
            'debug',
            'info',
            'warn',
            'error',
          ],
        },
      ],
      'no-debugger': 'off',
    },
  },
  vue: {
    overrides: {
      'vue/block-order': [
        'error',
        {
          order: [
            'template',
            'script:not([setup])',
            'script[setup]',
            'style:not([scoped])',
            'style[scoped]',
            'i18n[locale=en]',
            'i18n:not([locale=en])',
          ],
        },
      ],
      'vue/no-unused-refs': 'warn',
      'vue/custom-event-name-casing': [
        'error',
        'camelCase',
        {
          ignores: [
            '/^on:[a-z][A-Za-z0-9]*$/u',
            '/^click:[a-z][A-Za-z0-9]*$/u',
            '/^copy:[a-z][A-Za-z0-9]*$/u',
          ],
        },
      ],
    },
  },
  typescript: {
    overrides: {
      'ts/no-explicit-any': ['warn', { ignoreRestArgs: true }],
      'ts/consistent-type-definitions': 'off',
      'ts/ban-types': ['error', { types: { Symbol: false } }],
      'ts/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'ts/no-redeclare': 'off',
      'ts/no-non-null-asserted-optional-chain': 'off',
      'ts/no-use-before-define': 'off',
    },
  },
  stylistic: {
    overrides: {
      'style/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'none',
          // requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      }],
    },
  },
},
)
