const express = require("express");
const { exec } = require("child_process");
const app = express();

const port = 3000;
const main = "refs/heads/master";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/webhook", (req, res) => {
  if (req.body.ref === main) {
    exec("./bin/run", (_, stdout, stderr) => {
      console.log(stderr);
      console.log(stdout);
    });
  }
  res.end();
});

app.listen(port, () => console.log(`listening on port ${port}`));
