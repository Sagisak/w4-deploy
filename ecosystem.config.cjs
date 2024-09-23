module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      script: '.output/server/index.mjs',
      env: {
        NUXT_HOST: '0.0.0.0',  // Listen on all interfaces, including public IP
        NUXT_PORT: '80',        // Set port to 80 (or 3000 if needed)
      },
      env_production: {
        NODE_ENV: 'production',
        NUXT_HOST: '0.0.0.0',  // Still listen on all interfaces in production
        NUXT_PORT: '80',        // Set production port to 80
      },
    },
  ],
};

