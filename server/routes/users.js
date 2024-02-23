const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const verifyToken = require('../middleware/verifyToken');
//const verifyToken = require('../middleware/verifyToken');

// Get all users
router.get('/', userController.getUsers);
// Create a new user
router.post('/', userController.createUser);
// Delete a user
router.delete('/:id', verifyToken, (req, res) => {
    userController.deleteUser(req, res);
});
//Update a user
router.put('/:id', verifyToken, (req, res) => {
    userController.updateUser(req, res);
});
//get a single user
router.get("/:id", userController.singleUser)

module.exports = router;