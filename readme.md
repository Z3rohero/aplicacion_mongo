


Primero instalamos las independencias que seria 
con npm i express

"express": "^4.18.1",
    "express-handlebars": "^6.0.6",
    "mongoose": "^6.5.1",
    "morgan": "^1.10.0",

instalamos dependecias de desarrollador 
con npm i -D 
  "devDependencies": {
    "@babel/cli": "^7.18.10",
    "@babel/core": "^7.18.10",
    "@babel/node": "^7.18.10",
    "@babel/preset-env": "^7.18.10",
    "nodemon": "^2.0.19"

/*Dato cuando se refiere estructura es la rganizacion de nuestro archivos*/


//Configuracion de plantilla de app.js

app.set("views", path.join(__dirname, "views"));

//Motor de plantillla engine

const exphbs = create({
  extname: '.hbs',
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout:'main'
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

// Routes
app.use(indexRoutes);

export default app;



// Para conectar a la bases de datos 
es de la seguinete manera 
// ten cuenta que tiene que importala al index.js

//Conecion a la bases de datos


import mongoose from "mongoose";
const mySecret = process.env['mongo_']


export async function connecToDB() {
  try {
    await mongoose.connect(mySecret);
    console.log("todo salio bien");
  } catch (error) {
    console.log(error);
  }

}