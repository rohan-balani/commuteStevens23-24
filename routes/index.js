import routes from "./routes.js"

const constructorMethod = (app) => {
  app.use("/", routes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

export default constructorMethod