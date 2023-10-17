import { TaskModel } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.getAllTasks()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const addTask = async (req, res) => {
  const { description } = req.body

  try {
    const task = await TaskModel.addTask({ description })
    res.json(task)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const deleteTask = async (req, res) => {
  const { id } = req.params

  try {
    await TaskModel.deleteTask({ id })
    res.json({ message: 'Deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
