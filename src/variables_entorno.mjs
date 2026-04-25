import {config} from "dotenv";

config();

const database=process.env.DATABASE;

console.log(database);