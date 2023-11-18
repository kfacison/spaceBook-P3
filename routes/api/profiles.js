const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/profiles/:id
router.get('/:id', ensureLoggedIn, profilesCtrl.getProfile);

// GET /api/profiles
router.get('/', ensureLoggedIn, profilesCtrl.getAll);

// POST /api/profiles
router.get('/:id', ensureLoggedIn, profilesCtrl.update);

// DELETE /api/profiles
router.get('/:id', ensureLoggedIn, profilesCtrl.deleteProfile);



router.get('/', ensureLoggedIn, notesCtrl.index);


module.exports = router;