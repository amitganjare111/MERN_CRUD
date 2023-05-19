import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import path from 'path';
import route from './Routes/route.js';
import ('./Database/Db.js');


dotenv.config({path: './config.env'});
const app = express();
app.use(express.json());
app.use(cors());
app.use(route);

app.listen(4041);
