const Profile = require('../../models/profile');

module.exports = {
    getProfile,
    update,
    deleteProfile,
    getAll
}

async function getAll(req, res) {
    console.log("Hit getAll controller")
}

async function deleteProfile(req, res) {
    console.log("Hit deleteProfile controller")
}

async function update(req, res) {
    console.log("Hit update controller")
}

async function getProfile(req, res) {
    console.log("Hit getProfile controller")
    const profile = await Profile.find({user: req.user._id});
    console.log(profile);
    try {
        res.json(profile)
    } catch {
        console.log(`Failed to retrieve user's profile`)
    }
}