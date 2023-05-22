import multer from "multer";
import crypto from "crypto";
import { GridFile, GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url:
    process.env.MONGO_URL ||
    "mongodb+srv://sanjarbek:UICI6qF5dpecpd4w@cluster0.tx3g4ok.mongodb.net/ecommerce",
  file(request, file: GridFile & { originalname: string }) {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buff) => {
        if (err) console.log(err);
        const filename = buff.toString("hex") + ".png";
        resolve({
          filename,
          bucketName: "uploads",
        });
      });
    });
  },
});
export const upload = multer({ storage });
