// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: 'MyNuxtApp',
      script: './.output/server/index.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NITRO_HOST: '0.0.0.0', // Ensure it's set to 0.0.0.0
        NITRO_PORT: '80',       // Set to 80 for HTTP
        NODE_ENV: 'production'
      },
      env_production: {
        NITRO_HOST: '0.0.0.0',
        NITRO_PORT: '80',
        NODE_ENV: 'production'
      }
    }
  ]
};

