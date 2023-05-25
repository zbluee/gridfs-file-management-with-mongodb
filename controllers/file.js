import mongoose from "mongoose";

export const getFiles = async (req, res) => {
  try {
    // Create a new GridFSBucket instance 
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "files",
    });

    // Retrieve all files from the bucket
    const files = await bucket.find({}).toArray();
    res.status(200).json({ success: true, count: files.length, files });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retirive file infos." });
  }
};

export const getFile = async (req, res) => {
  try {
    const { filename } = req.params;

    if (!filename)
      return res
        .status(404)
        .json({ success: false, msg: "file name is required" });

    // Create a new GridFSBucket instance 
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "files",
    });

    // find a file that with filename from the bucket
    const file = await bucket.find({ filename }).toArray();
    if (file.length == 0)
      return res
        .status(404)
        .json({ success: false, msg: `No file with : '${filename}' exist.` });
    res.status(200).json({ success: true, file });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retirive file info." });
  }
};

export const streamFile = async (req, res) => {
  try {
    const { filename } = req.params;

    if (!filename)
      return res
        .status(404)
        .json({ success: false, msg: "file name is required" });

    // Create a new GridFSBucket instance
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "files",
    });

    // Open a download stream for the specified filename
    const downloadStream = bucket.openDownloadStreamByName(filename);

    // Pipe the download stream to the response object to send the file
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
};

export const uploadFile = async (req, res) => {
    res
      .status(201)
      .json({ success: true, message: "Issue submitted successfully." });

};
