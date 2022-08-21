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