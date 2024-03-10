const express = require("express");
const router = express.Router();

class SortRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes = () => {
    router.post("/", this.controller.sortNumbers);
    return router;
  };
}

module.exports = SortRouter;
