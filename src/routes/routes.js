import { Router } from 'express';
import Task from '../models/Task';
const router = Router()

router.get("/", async (req, res) => {
  // para hacer una consulta de Task
  //Funciones para recordar 
  // lean () Me pasar un objeto en javascript

  const tasks = await Task.find().lean()
  res.render("index", { tasks: tasks });
});
router.post('/tasks/add', async (req, res) => {
  const task = Task(req.body)
  await task.save()

  res.redirect('/')


})

router.get("/about", (req, res) => {
  res.render("about")
});

router.get("/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id).lean()

  res.render("edit", { task })
});

router.post('/edit/:id ', async (req, res) => {
  //funcion para actualizar mi bases de datos 
  //req.body es la inofrmacion que esta actualizado 
  const { id } = req.params

  await Task.findByIdAndUpdate(id, req.body)

  res.redirect("/");
})


router.get('/delete/:id', async (req, res) => {
  //funcion para actualizar mi bases de datos 
  //req.body es la inofrmacion que esta actualizado 
  const { id } = req.params
  await Task.findByIdAndDelete(id, req.body)

  res.redirect("/");
})

router.get('/done/:id', async (req, res) => {
  //funcion para actualizar mi bases de datos 
  //req.body es la inofrmacion que esta actualizado 
  const { id } = req.params
  const task = await Task.findById(id)

  task.done = !task.done;
  //para gurada la tarea
  await task.save();

  //res.send("hecho")
  res.redirect("/");
})



export default router;

