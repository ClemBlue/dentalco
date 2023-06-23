// Import function from Article Model
import { getArticles, getArticleById, insertArticle, updateArticleById, deleteArticleById } from "../models/articleModel.js";
 
// Get All Articles
export const showArticles = (req, res) => {
    getArticles((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Article
export const showArticleById = (req, res) => {
    getArticleById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Article
export const createArticle = (req, res) => {
    const data = req.body;
    insertArticle(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Article
export const updateArticle = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateArticleById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Article
export const deleteArticle = (req, res) => {
    const id = req.params.id;
    deleteArticleById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}