const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: {
        type: String,
        minLength: 1,
        maxLength: 500
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Post', postSchema)