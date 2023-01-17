const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "upload.html"));
});

app.post("/upload", fileUpload({ createParentPath: true }), (req, res) => {
  const files = req.files;
  console.log(files);   

  return res.json({ status: 'success', message: 'success' })
});

app.listen(3000);
