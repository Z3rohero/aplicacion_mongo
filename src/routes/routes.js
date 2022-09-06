import { Router } from 'express';
import Task from '../models/Task';
import { renderTask, createTask, taskEdit, updateTask, dele, don } from '../controlle/taskcont';


const router = Router()
router.get("/", renderTask);
router.post('/tasks/add', createTask);
router.get("/task/:id/edit", taskEdit);
router.post('/task/:id/edit', updateTask);
router.get('/delete/:id', dele);
router.get('/done/:id', don);



export default router;

