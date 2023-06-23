// Import function from Client Model
import { getClients, getClientById, insertClient, updateClientById, deleteClientById } from "../models/clientModel.js";
 
// Get All Clients
export const showClients = (req, res) => {
    getClients((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Client
export const showClientById = (req, res) => {
    getClientById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Client
export const createClient = (req, res) => {
    const data = req.body;
    insertClient(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Client
export const updateClient = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateClientById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Client
export const deleteClient = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    deleteClientById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}