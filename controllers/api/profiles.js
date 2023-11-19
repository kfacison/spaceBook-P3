const Profile = require('../../models/profile');

module.exports = {
    createProfile,
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

async function createProfile(req, res) {
    console.log("Hit createProfile controller")
    const profile = await new Profile({user: req.user._id, username: "Earthling"})
    console.log(profile);
    try {
        res.json(profile)
    } catch {
        console.log(`Failed to create user's profile`)
    }
}