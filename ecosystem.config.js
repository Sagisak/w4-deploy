module.exports = {
  apps: [
    {
      name: 'App',
      port: '80',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
