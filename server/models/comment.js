const { Schema, model } = require('mongoose');
const moment = require('moment');

const commentSchema = new Schema(
    {
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
        post: {
            type: Schema.Types.ObjectId,
            ref: "Post"
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

const Comment = model("comment", commentSchema);

module.exports = Comment;