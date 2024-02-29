import multer from "multer";

// Function to generate a unique suffix
const generateUniqueSuffix = () => {
  // Implement your logic to generate a unique suffix here
  // For example, you can use a timestamp
  return Date.now();
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = generateUniqueSuffix();
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

export const upload = multer({
  storage,
});
