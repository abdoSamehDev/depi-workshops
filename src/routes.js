const postsRoutes = require("./resources/posts/routes");

module.exports = (app) => {
  app.use("/posts", postsRoutes);
};
