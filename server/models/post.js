const { Schema, model } = require('mongoose');
const moment = require('moment');

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt) => moment(createdAt).format("MMM DD, YYYY [at] hh:mm a")
        },
        user: {
                type: Schema.Types.ObjectId,
                ref: "User"
        },
        username: {
            type: String
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Post = model('post', postSchema);

module.exports = Post;