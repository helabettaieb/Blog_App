const User = require("../api/models/User");

//*get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
};

//create a new user: 
const createUser = async (req, res) => {
    const {name, email, jobTitle, company} = req.body;

    try {
        const newUser = await User.create({
            name,
            email,
            jobTitle,
            company,
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
};

//delete a user:
const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
};
//update a user:
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const {name, email, jobTitle, company} = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {name, email, jobTitle, company},
            {new: true, runValidators: true}
        );

        if (!updatedUser) {
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
};

//get single user
const singleUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    singleUser,
}