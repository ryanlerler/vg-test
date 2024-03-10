const express = require("express");
const app = express();
const PORT = 3000;

const SortRouter = require("./routers/sortRouter");
const SortController = require("./controllers/sortController");
const sortController = new SortController();
const sortRouter = new SortRouter(sortController).routes();

const SumRouter = require("./routers/sumRouter");
const SumController = require("./controllers/sumController");
const sumController = new SumController();
const sumRouter = new SumRouter(sumController).routes();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sortNumbers", sortRouter);
app.use("/sumNumbers", sumRouter);

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
