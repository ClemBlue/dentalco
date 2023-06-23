import {
  insertUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUserPasswordById,
  deleteUserById,
} from "../models/userModel.js";

// Create New User
export const createUser = (req, res) => {
  const user = req.body;
  insertUser(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user.",
      });
    } else {
      res.send(data);
    }
  }); 
};

// Get all users
export const findAllUsers = (req, res) => {
  getAllUsers((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users.",
      });
    } else {
      res.send(data);
    }
  });
};

// Find user by email
export const findUserByEmail = (req, res) => {
  const email = req.params.email;
  getUserByEmail(email, (err, data) => {
    if (err) {
      if (err.message === "User not found") {
        res.status(404).send({
          message: `Not found user with email ${email}`,
        });
      } else {
        res.status(500).send({
          message:
            err.message ||
            `Some error occurred while retrieving user with email ${email}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Find user by id
export const findUserById = (req, res) => {
  const id = req.params.id;
  getUserById(id, (err, data) => {
    if (err) {
      if (err.message === "User not found") {
        res.status(404).send({
          message: `Not found user with id ${id}`,
        });
      } else {
        res.status(500).send({
          message:
            err.message || `Some error occurred while retrieving user with id ${id}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Update user password by id
export const updateUserPassword = (req, res) => {
  const id = req.params.id;
  const newPassword = req.body.newPassword;
  updateUserPasswordById(id, newPassword, (err, data) => {
    if (err) {
      if (err.message === "User not found") {
        res.status(404).send({
          message: `Not found user with id ${id}`,
        });
      } else {
        res.status(500).send({
          message:
            err.message || `Some error occurred while updating password of user with id ${id}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Delete user by id
export const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserById(id, (err, data) => {
    if (err) {
      if (err.message === "User not found") {
        res.status(404).send({
          message: `Not found user with id ${id}`,
        });
      } else {
        res.status(500).send({
          message:
            err.message || `Some error occurred while deleting user with id ${id}.`,
        });
      }
    } else {
      res.send({
        message: "User was deleted successfully!",
      });
    }
  });
};