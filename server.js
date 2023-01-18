const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const path = require("path");
const uploadRoute = require("./routes/uploadRoute");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "upload.html"));
});

app.use(
  "/upload",
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 5 * 1024 * 1024 },
  }),
  uploadRoute
);

app.listen(3000);
