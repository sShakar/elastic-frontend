module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-strongly-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser'
	},
	overrides: [
		{
			files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
			extends: ['plugin:cypress/recommended']
		}
	],
	env: {
		browser: true,
		node: true,
		es6: true
	},
	rules: {
		'prettier/prettier': 'error',
		'no-console': 'warn',
		'@typescript-eslint/no-console': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: ['function'],
				format: ['camelCase']
			},
			{
				selector: ['variable'],
				format: ['camelCase', 'UPPER_CASE']
			},
			{
				selector: ['class'],
				format: ['PascalCase']
			}
		],
		'vue/attributes-order': [
			'error',
			{
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					'UNIQUE',
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT'
				]
			}
		]
	}
};
