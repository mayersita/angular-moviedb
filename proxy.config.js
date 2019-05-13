const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8092/',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;