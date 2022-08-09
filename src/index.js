import express from "express";
import indexRoutes from './routes/routes.js'
const app = express();

app.listen(3000);

//app.send("hola como fue")
console.log('serve on port', 3000);

