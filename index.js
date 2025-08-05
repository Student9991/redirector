const express = require("express");
const app = express();

app.get("/*.jpg", (req, res) => {
  console.log("Redirecting to us1...");
  res.redirect("http://us1.ws-tun.me:80/");
});

app.get("/", (req, res) => {
  res.send("Redirector is working");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
