// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            'eslint.config.mjs',
            '/dist/**',
            '/node_modules/**',
            'coverage/**',
            '.eslintrc.js',
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    eslintPluginPrettierRecommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            // Modern Node.js supports ES2022
            ecmaVersion: 2022,
            sourceType: 'module',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            // Disabled rules for better developer experience
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_'
            }],
            'no-console': ['warn', {allow: ['warn', 'error', 'info']}],
            'prefer-const': 'error',
            'eqeqeq': 'error',
            'no-var': 'error',
            'prettier/prettier': ['error', {
                endOfLine: 'auto',
                singleQuote: true,
                printWidth: 100,
                trailingComma: 'all',
                tabWidth: 2,
                semi: true,
                // Disable end of line newline requirement
                endWithNewline: false,
            }]
        },
        // Setting specific rules for certain file patterns
        files: ['**/*.ts'],
    },
    {
        // Special rules for test files
        files: ['**/*.spec.ts', '**/*.test.ts'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            'no-console': 'off',
        }
    }
);