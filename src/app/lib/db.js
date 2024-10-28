import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = async () => {
  try {
    // console.log("Attempting to connect...");
    const db = await mysql.createConnection({

      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
    // console.log("Connected to the database!");
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connection;
