module.exports = {
  rules: {
    'indent': ['error', 2],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'semi': ['error', 'always'],
    "eol-last": ["error", "always"],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ]
  }
}
