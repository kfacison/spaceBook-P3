const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import User from './user';
import Post from './post'

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String,
        required: true,
        default: 'Earthling'
    },
    generation: {
        type: String,
        enum: ['Greatest Generation', 'Silent Generation', 'Boomer', 'Gen X', 'Millenials', 'Zoomer', 'Gen A']
    },
    favPlanet: {
        type: String,
        enum: ['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune','pluto']
    },
    bio: {
        type: String,
        maxLength: 500
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'        
    }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Profile', profileSchema);