const express = require("express");
const router = express.Router();

class SumRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes = () => {
    router.post("/", this.controller.sumNumbers);
    return router;
  };
}

module.exports = SumRouter;
