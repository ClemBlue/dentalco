// import connection
import db from "../config/database.js";

// Get All Contacts
export const getContacts = (result) => {
    db.query("SELECT * FROM contact", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Contact
export const getContactById = (id, result) => {
    db.query("SELECT * FROM contact WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Contact to Database
export const insertContact = (data, result) => {
    db.query("INSERT INTO contact SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Contact to Database
export const updateContactById = (data, id, result) => {
    db.query("UPDATE contact SET user = ?, societe = ?, email = ?, telephone = ?, sujet = ?, message = ? WHERE id = ?", [data.user, data.societe, data.email, data.telephone, data.sujet, data.message, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Contact to Database
export const deleteContactById = (id, result) => {
    db.query("DELETE FROM contact WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}