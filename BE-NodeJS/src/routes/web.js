import express from "express";
// import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {



  return app.use("/", router);
};

module.exports = initWebRoutes;
