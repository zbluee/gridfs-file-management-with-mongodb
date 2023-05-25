import {} from "dotenv/config";
import express from "express";
import { connect } from "./db/connections.js";
import { fileRouter } from "./routes/file.js";

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());

server.use("/", fileRouter);

const start = async () => {
  try {
    await connect(process.env.MONGO_CONNECTION_STRING);
    server.listen(port, () =>
      console.log(`Server is listening on port ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
