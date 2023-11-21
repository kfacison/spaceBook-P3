const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');// GET /api/profiles/:id

// POST /api/profiles/:id/posts
router.post('/:id/posts', ensureLoggedIn, postsCtrl.createPost);

// PUT /api/profiles/:id/posts
router.put('/:id/posts', ensureLoggedIn, postsCtrl.updatePost);

// DELETE /api/profiles/:id/posts
router.delete('/:id/posts', ensureLoggedIn, postsCtrl.deletePost);


module.exports = router;