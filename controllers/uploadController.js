const path = require("path");

exports.fileUpload = (req, res) => {
  const files = req.files;
  console.log(files);

  //save the files
  Object.keys(files).forEach((key) => {
    const filepath = path.join(__dirname, "..", "files", files[key].name);
    files[key].mv(filepath, (err) => {
      if (err) return res.send("no file uploaded");
    });
  });

  return res.json({ status: "success", message: "success" });
};
