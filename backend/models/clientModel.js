// import connection
import db from "../config/database.js";

// Get All Clients
export const getClients = (result) => {
    db.query("SELECT * FROM client", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Client
export const getClientById = (id, result) => {
    db.query("SELECT * FROM client WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Client to Database
export const insertClient = (data, result) => {
    db.query("INSERT INTO client SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Client to Database
export const updateClientById = (data, id, result) => {
    db.query("UPDATE client SET nom = ?, prenom = ?, mail = ?, telephone = ?, adresse = ?, postal = ?, ville = ?, active = ? WHERE id = ?", [data.nom, data.prenom, data.mail, data.telephone, data.adresse, data.postal, data.ville, data.active, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Client to Database
export const deleteClientById = (id, result) => {
    db.query("UPDATE client SET active = ? FROM client WHERE id = ?", [data.active, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}