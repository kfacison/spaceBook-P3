const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/profiles/:id
router.get('/:id', ensureLoggedIn, profilesCtrl.getProfile);

// GET /api/profiles
router.get('/', ensureLoggedIn, profilesCtrl.getAll);

// POST /api/profiles/:id
router.post('/:id', ensureLoggedIn, profilesCtrl.createProfile);

// PUT /api/profiles/:id
router.put('/:id', ensureLoggedIn, profilesCtrl.update);

// DELETE /api/profiles/:id
router.delete('/:id', ensureLoggedIn, profilesCtrl.deleteProfile);


// Route for adding a friend
router.post('/', ensureLoggedIn, profilesCtrl.addFriend);

module.exports = router;