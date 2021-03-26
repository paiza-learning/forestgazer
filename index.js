const express = require("express");
const { exec } = require("child_process");
const app = express();

app.post("/webhook", (_, res) => {
  exec('echo "recieved webhook!"', (err, stdout, stderr) => {
    if (err) {
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  });
  res.end();
});

app.listen(3000, () => console.log("listening on port 3000"));
