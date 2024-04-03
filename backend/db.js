import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

export const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});
