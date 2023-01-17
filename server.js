const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const path = require("path");

app.use(fileUpload());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "upload.html"));
});

app.post("/upload", (req, res) => {
  const files = req.files;

  console.log(files);

  return res.json({ status: "logged", message: "logged" });
});

app.listen(3000);
