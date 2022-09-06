import Task from '../models/Task';
export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean()
  res.render("index", { tasks: tasks });
};


export const createTask = async (req, res) => {
  const task = Task(req.body)
  await task.save()

  res.redirect('/')


}


export const taskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean()
    res.render("edit", { task })
  } catch (error) {
    console.log(error.message)

  }
}


export const updateTask = async (req, res) => {

  const { id } = req.params

  await Task.findByIdAndUpdate(id, req.body)

  res.redirect("/");
}

export const dele = async (req, res) => {
  //funcion para actualizar mi bases de datos 
  //req.body es la inofrmacion que esta actualizado 
  const { id } = req.params
  await Task.findByIdAndDelete(id, req.body)

  res.redirect("/");
}


export const don = async (req, res) => {
  //funcion para actualizar mi bases de datos 
  //req.body es la inofrmacion que esta actualizado 
  const { id } = req.params
  const task = await Task.findById(id)
  task.done = !task.done;
  //para gurada la tarea
  await task.save();
  //res.send("hecho")
  res.redirect("/");
}