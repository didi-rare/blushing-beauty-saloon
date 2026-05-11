module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    ignorePatterns: ['dist', 'node_modules', 'scripts', 'package-lock.json'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react/prop-types': 'off',
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
    overrides: [
        {
            files: ['**/__tests__/**/*.{js,jsx}', '**/*.test.{js,jsx}'],
            globals: {
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                vi: 'readonly',
            },
        },
    ],
};
