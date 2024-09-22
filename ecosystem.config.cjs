module.exports = {
  apps: [
    {
      name: 'App',
      script: './.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        PORT: 80,
        HOST: '0.0.0.0'  // Ensure it binds to all network interfaces
      }
    }
  ]
}

