const express = require("express");
const router = express.Router();
const multer = require("multer");
const ProdController = require("../controllers/prodController");
//const { verifyUser, verifyAdmin } = require("../verifyToken");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.imagetype === 'image/png') {
//         cb(null, true);
//     }
//     else {
//         cb(null, false);
//     }
// };

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  }, // fileFilter: fileFilter
});

router.get("/getcategories", ProdController.getproducts);

router.post("/addproduct", upload.single("productImage"), ProdController.saveproduct);

router.get("/getproduct", ProdController.getproduct);

module.exports = router;