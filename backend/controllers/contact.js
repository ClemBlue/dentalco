// Import function from Contact Model
import { getContacts, getContactById, insertContact, updateContactById, deleteContactById } from "../models/contactModel.js";
 
// Get All Contacts
export const showContacts = (req, res) => {
    getContacts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Contact
export const showContactById = (req, res) => {
    getContactById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Contact
export const createContact = (req, res) => {
    const data = req.body;
    insertContact(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Contact
export const updateContact = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateContactById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Contact
export const deleteContact = (req, res) => {
    const id = req.params.id;
    deleteContactById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}