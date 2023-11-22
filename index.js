import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import flash from "express-flash";
import session from "express-session";
import DBJS from "./db.js";
import shoeDB from "./database/db.js";
import route from './routes/shoes.js';

const app = express();
let database = shoeDB(DBJS);
let shoeRoute = route(database)

import cors from "cors";

app.use(cors());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "Yams",
  })
);
app.use(flash());

app.get('/api/shoes', shoeRoute.show)
app.get('/api/shoes/brand/:brandname', shoeRoute.brand_name)
app.get('/api/shoes/size/:size', shoeRoute.allSize)
app.get('/api/shoes/brand/:brandname/size/:size', shoeRoute.brand_and_size)
app.get('/api/shoes/colors/:color', shoeRoute.filterByColor)

let PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log('App started...', PORT);
})