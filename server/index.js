import express from "express";

const app = express();

app.use("/", (req, res) => {
  return res.send("globe app");
});

app.listen(8080, console.log("Server is running..."));
