const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/webhook", (req, res) => {
  if (req.body.ref === "refs/heads/master") {
    exec("./bin/run", (err, stdout, stderr) => {
      if (err) {
        console.log(stderr);
      } else {
        console.log(stdout);
      }
    });
  }
  res.end();
});

app.listen(3000, () => console.log("listening on port 3000"));
