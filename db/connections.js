import mongoose from "mongoose";

export const connect = (connectionString) => mongoose.connect(connectionString)