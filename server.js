import express from "express";

const server = express();
const port = process.env.PORT || 3001;

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "home route" });
});

server.listen(port, () => console.log(`Server is listening on port ${port}`));
