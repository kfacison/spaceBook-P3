const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// FILE TO BE DELETED

// Path in server.js is /profiles/:id/posts

// GET /api/profiles/:id/posts
router.get("/", ensureLoggedIn, postsCtrl.getPosts);

// POST /api/profiles/:id/posts
router.post("/", ensureLoggedIn, postsCtrl.createPost);

// PUT /api/profiles/:id/posts
router.put("/", ensureLoggedIn, postsCtrl.updatePost);

// DELETE /api/profiles/:id/posts
router.delete("/", ensureLoggedIn, postsCtrl.deletePost);

module.exports = router;
