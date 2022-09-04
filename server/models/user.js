const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Valid email address required"]
        },
        password: {
            type: String,
            required: true,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post"
            }
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.checkPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model('user', userSchema);

module.exports = User;