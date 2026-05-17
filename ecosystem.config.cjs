module.exports = {
  apps: [{
    name: 'troglodyte-plugin',
    script: 'npm',
    args: 'run dev',
    cwd: '.',
    interpreter: 'node',
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    }
  }]
};
