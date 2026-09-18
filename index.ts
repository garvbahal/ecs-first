import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("App is healthy");
});

app.get("/cpu", (req, res) => {
  for (let i = 0; i <= 1_000_000_000; i++) {
    Math.random();
  }
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("App is running at 3000 port");
});
