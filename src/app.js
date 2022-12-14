import express from "express";
import { create } from 'express-handlebars';
import indexRoutes from './routes/routes.js';
import path from 'path';
import morgan from 'morgan';

const app = express();
// pa configura  el motor de la plantilla


app.set("views", path.join(__dirname, "views"));

//Motor de plantillla engine

const exphbs = create({
  extname: '.hbs',
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: 'main',
  //Opcional si no le voy cambiar el nombre partials
  partialDir: path.join(app.get("views"), "partials")
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extend: false }))
// Routes
app.use(indexRoutes);

app.use(express.static(path.join(__dirname, "public")));



export default app;