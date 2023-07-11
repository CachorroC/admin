module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: [ 'error', 'single' ],
    indent: [
      'error',
      2, {
        'ArrayExpression': 'first',
        'CallExpression': {
          'arguments': 'first'
        },
        'FunctionDeclaration': {
          'body': 2,
          'parameters': 'first'
        },
        'FunctionExpression': {
          'body': 2,
          'parameters': 'first'
        },
        'ImportDeclaration': 'first',
        'ObjectExpression': 'first',
        'SwitchCase': 1,
        'VariableDeclarator': 'first',
        'offsetTernaryExpressions': true
      }
    ]
  }
}