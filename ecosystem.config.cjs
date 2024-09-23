// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: 'MyNuxtApp',
      script: './.output/server/index.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NITRO_HOST: '0.0.0.0',
        NITRO_PORT: '3000',
        NODE_ENV: 'production'
      },
      env_production: {
        NITRO_HOST: '0.0.0.0',
        NITRO_PORT: '3000',
        NODE_ENV: 'production'
      }
    }
  ]
};

