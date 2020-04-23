module.exports = {
  hooks: {
    'pre-push': 'npm test --silent && npm audit --production --audit-level= && echo hola',
  },
};
