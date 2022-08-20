const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        post:[ 
            {
                type: Schema.Types.ObjectId,
                ref: "Post"
            }
        ],
    }
);

const Comment = model()

module.exports = Comment;