module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'plugin:vue/recommended',
        // "@vue/typescript/recommended",
        'plugin:vue/base',
        'plugin:vuetify/base'
        // "@vue/prettier",
        // "@vue/prettier/@typescript-eslint"
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'no-explicit-any': 0,
        'no-prototype-builtins': 0,
        'vue/custom-event-name-casing': 0,
        'vue/no-lone-template': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-inferrable-types': 0
    },
}
