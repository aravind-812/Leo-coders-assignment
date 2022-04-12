const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const { getAllUsers,
    createUser,
    updateUser,
    deleteUser } = require('../controller/tasks')

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').patch(updateUser).delete(deleteUser)

module.exports = router

