import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "profileImage");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

export const singleImage = multer({
  storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, callback) => {
    const fileTypes = /jpg|png|jpeg|gif/;
    const fileMimeType = fileTypes.test(file.mimetype);
    const extName = fileTypes.test(path.extname(file.originalname));

    if (fileMimeType && extName) {
      return callback(null, true);
    }
    callback(new Error("only .jpg, .png, .jpeg, .gif format allowed!"));
  },
}).single("file");
