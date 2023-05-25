import { GridFsStorage } from "multer-gridfs-storage";
import crypto from "crypto";
import path from "path";

//initialize storage
export const storage = new GridFsStorage({
  url: process.env.MONGO_CONNECTION_STRING,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) return reject(err);
        
        //validate upload by attribute
        if(!req.body.uploadBy || !file || file.length === 0) return reject(new Error("uploadBy attribute is required"))
        return resolve({
          filename: buf.toString("hex") + path.extname(file.originalname), // modify the file name using random hex string inorger to prevent file duplicate
          bucketName: "files", // Name of the MongoDB collection,
          //add the uploadBy and orginalname field as metadata
          metadata : {
            uploadBy : req.body.uploadBy,
            originalname : file.originalname 
            // You can add other metadata fields here
          }
        });
      });
    });
  },
});

