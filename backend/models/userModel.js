// Import database connection
import db from "../config/database.js";
import bcrypt from "bcrypt";

// Create New User
export const insertUser = (user, result) => {
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            user.password = hash;
            db.query(
                "INSERT INTO user (email, password) VALUES (?, ?)",
                [user.email, user.password],
                (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                } else {
                    console.log("created user: ", { id: res.insertId, ...user });
                    result(null, { id: res.insertId, ...user });
                }
                }
            );
        }
    });
};
  

// Get all users
export const getAllUsers = (result) => {
    db.query("SELECT * FROM user", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("users: ", res);
        result(null, res);
      }
    });
  };

// Find user by email
export const getUserByEmail = (email, result) => {
    db.query("SELECT * FROM user WHERE email = ?", [email], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
        } else {
            // User not found with the given email
            result({ message: "User not found" }, null);
        }
    });
};

// Find user by id
export const getUserById = (id, result) => {
    db.query("SELECT * FROM user WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
        } else {
            // User not found with the given id
            result({ message: "User not found" }, null);
        }
    });
};

// Update user password by id
export const updateUserPasswordById = (id, newPassword, result) => {
    db.query(
        "UPDATE user SET password = ? WHERE id = ?",
        [newPassword, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else if (res.affectedRows == 0) {
                // User not found with the given id
                result({ message: "User not found" }, null);
            } else {
                console.log("updated user: ", { id: id, newPassword: newPassword });
                result(null, { id: id, newPassword: newPassword });
            }
        }
    );
};

// Delete user by id
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM user WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            // User not found with the given id
            result({ message: "User not found" }, null);
        } else {
            console.log("deleted user with id: ", id);
            result(null, res);
        }
    });
};