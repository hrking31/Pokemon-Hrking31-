module.exports = {
  apps: [
    {
      name: "pokeclient",
      script: "npm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
