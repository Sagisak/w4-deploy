module.exports = {
  apps: [
    {
      name: 'MyNuxtApp',
      script: './.output/server/index.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
};

