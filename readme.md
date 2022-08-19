


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

//se  crear la funcion para dirrecionar el post de //envio de la informacion

router.post('/tasks/add',(req, res)=>{
  res.send ('guardado ')
})


// para guarda la informacion en mogoldb

recuerda que debo import mongoose


router.post('/tasks/add', async (req, res) => {
  const task = Task(req.body)
  const tasksaved = await task.save()
  console.log(tasksaved)
  res.send('guardado ')
})


Para hacer una consulta 

find() Encuentra todo los objetos en la bases de datos

router.get("/", (req, res) => {
 // para hacer una consulta de Task
 const task = await  Task.find()

 console.log(tasks)
  
 res.render("index", {tasks:tasks});
});

