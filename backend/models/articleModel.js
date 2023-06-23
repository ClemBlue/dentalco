// import connection
import db from "../config/database.js";

// Get All Articles
export const getArticles = (result) => {
    db.query("SELECT * FROM article", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Article
export const getArticleById = (id, result) => {
    db.query("SELECT * FROM article WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Article to Database
export const insertArticle = (data, result) => {
    db.query("INSERT INTO article SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Article to Database
export const updateArticleById = (data, id, result) => {
    db.query("UPDATE article SET titre = ?, lieu = ?, description = ?, image = ?, date = ? WHERE id = ?", [data.titre, data.lieu, data.description, data.image, data.date, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Article to Database
export const deleteArticleById = (id, result) => {
    db.query("DELETE FROM article WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}