import { Router } from 'express';
import Task from '../models/Task';
const router = Router()

router.get("/", async (req, res) => {
 // para hacer una consulta de Task
 //Funciones para recordar 
 // lean () Me pasar un objeto en javascript

 const tasks = await Task.find().lean() 
 res.render("index", {tasks:tasks});
});
router.post('/tasks/add', async (req, res) => {
  const task = Task(req.body)
  await task.save()

  res.redirect('/')
 
  
})

router.get("/about", (req, res) => {
  res.render("about")
});

router.get("/edit/:id", (req, res) => {
  //await Task.findById()
  
  res.render("edit")
});

router.post('/edit/:id ',(req,res)=>{
  console.log(req.body)
  res.send("recibido")
})

export default router;

