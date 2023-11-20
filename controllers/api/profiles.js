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
    // Update later and set limit to 100 profiles
    try{
        const profiles = await Profile.find({});
        // console.log(profiles);
        res.status(200).json(profiles);
    } catch {
        console.log('Failed to retrieve all profiles');
    }
}

// Does this need to delete the user?
async function deleteProfile(req, res) {
    console.log("Hit deleteProfile controller")
    const profile = await Profile.findByIdAndDelete({user: req.user._id});
    try {
        // Probably an invalid response for a successful delete
        res.json(profile)
    } catch {
        console.log(`Failed to retrieve user's profile`)
    }
}

// Probably need to update to handle the submitted changes
async function update(req, res) {
    console.log("Hit update controller")
    const profile = await Profile.find({user: req.user._id});
    try {
        res.json(profile)
    } catch {
        console.log(`Failed to retrieve user's profile`)
    }
}

async function getProfile(req, res) {
    console.log("Hit getProfile controller")
    const profile = await Profile.find({user: req.user._id});
    try {
        res.json(profile)
    } catch {
        console.log(`Failed to retrieve user's profile`)
    }
}

async function createProfile(req, res) {
    console.log("Hit createProfile controller")
    try {
        const profile = await new Profile({user: req.user._id, username: "Earthling"})
        await profile.save();
        console.log(profile);
        res.json(profile);
    } catch {
        console.log(`Failed to create user's profile`)
    }
}