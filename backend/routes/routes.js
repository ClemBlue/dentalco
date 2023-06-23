// import express
import express from "express";
 
// import function from controller
import {
  showArticles,
  showArticleById,
  createArticle,
  updateArticle,
  deleteArticle
} from "../controllers/article.js";
import {
  showClients,
  showClientById,
  createClient,
  updateClient,
  deleteClient
} from "../controllers/client.js";
import {
  showContacts,
  showContactById,
  createContact,
  updateContact,
  deleteContact
} from "../controllers/contact.js";
import {
    createUser, 
    findAllUsers,
    findUserByEmail,
    findUserById,
    updateUserPassword,
    deleteUser,
} from "../controllers/user.js";

// init express router
const router = express.Router();

// Articles Routes
router.get("/articles", showArticles);
router.get("/articles/:id", showArticleById);
router.post("/articles", createArticle);
router.put("/articles/:id", updateArticle);
router.delete("/articles/:id", deleteArticle);

// Clients Routes
router.get("/clients", showClients);
router.get("/clients/:id", showClientById);
router.post("/clients", createClient);
router.put("/clients/:id", updateClient);
router.delete("/clients/:id", deleteClient);

// Contacts Routes
router.get("/contacts", showContacts);
router.get("/contacts/:id", showContactById);
router.post("/contacts", createContact);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

// User Routes
router.post("/users", createUser);
router.get("/users", findAllUsers);
router.get("/users/:email", findUserByEmail);
router.get("/users/:id", findUserById);
router.put("/users/:id", updateUserPassword);
router.delete("/users/:id", deleteUser);

// export default router
export default router;