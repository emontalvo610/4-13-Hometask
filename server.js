const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors"); // Import the cors middleware

app.use(express.json());
app.use(cors());

const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
};

app.post("/api/capture", (req, res) => {
  console.log("Image Received");
  const imageData = req.body.imageData;
  const imagePath = path.join(
    __dirname,
    "captured_images",
    `${Date.now()}.png`
  );

  ensureDirectoryExists(imagePath);

  fs.writeFile(imagePath, imageData.split(",")[1], "base64", (err) => {
    if (err) {
      console.error("Error saving image:", err);
      res.status(500).send("Error saving image");
    } else {
      console.log(`Image saved to ${imagePath}`);
      res.sendStatus(200);
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
