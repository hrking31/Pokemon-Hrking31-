module.exports = {
  apps: [
    {
      name: "client",
      script: "npm",
      args: "start",
      cwd: "./client",
      watch: true,
      ignore_watch: ["node_modules"],
    },
  ],
};
