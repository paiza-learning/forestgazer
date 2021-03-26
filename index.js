const express = require("express");
const { exec } = require("child_process");
const app = express();

const port = 3000;

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

app.listen(port, () => console.log(`listening on port ${port}`));
