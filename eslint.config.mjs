import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'no-undef': 'off',
    },
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
])
