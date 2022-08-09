import express from "express";
import exphbs from 'express-handlebars';
import indexRoutes from './routes/routes.js';
import path from 'path';


const app = express();
// pa configura  el motor de la plantilla
app.set('views',path.join(__dirname,'views'))

app.engine('.hbs', exphbs ({
  extname:".hbs",
  
}));


app.use(indexRoutes);

export default app;