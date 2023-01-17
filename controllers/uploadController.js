exports.fileUpload = (req, res) => {
  const files = req.files;
  console.log(files);

  return res.json({ status: "success", message: "success" });
};
