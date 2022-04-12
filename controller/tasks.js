const task = require('../models/tasks');
const { param } = require('../routes/tasks');

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await task.find({})
        res.json({ allUsers });
    } catch (error) {
        console.log(error)
        res.send({ "error": error._message })
    }


}

const createUser = async (req, res) => {
    try {
        const newTask = await task.create(req.body)
        res.json({ newTask })
    } catch (error) {
        console.log(error)
        res.send({ "error": error._message })
    }

}



const updateUser = async (req, res) => {
    const { id: taskID } = req.params
    const updated = await task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!updated) {
        return res.status(404).json({ "msg": `no task with id: ${taskID}` })
    }
    res.json({ updated })

}

const deleteUser = async (req, res) => {
    try {
        const { id: deleteUserId } = req.params
        const delTask = await task.findOneAndDelete({ _id: deleteUserId })
        if (!delTask) {
            return res.status(404).json({ "msg": `no task with id: ${delTask}` })
        }
        console.log("done")
        res.status(200).json({ "Id": `The task has been deleted ${deleteUserId}` })
    } catch (error) {
        console.log(error)
        res.send({ "error": error._message })
    }
}


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} 