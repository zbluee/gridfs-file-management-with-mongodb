import express from "express";
import {
  getFile,
  getFiles,
  uploadFile,
  streamFile,
} from "../controllers/file.js";
import { storage } from "../utils/storage.js";
import multer from "multer";

const router = express.Router();

router.get("/files", getFiles);
router.get("/file/:filename", getFile);
router.get("/stream/:filename", streamFile);

const upload = multer({ storage });

router.post("/upload", upload.array("files", 3), uploadFile);

export { router as fileRouter };
