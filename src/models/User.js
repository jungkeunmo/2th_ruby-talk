import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
    {
        avatar: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        userPassword: {
            type: String,
            required: true
        },
        statusMessage: {
            type: String,
            required: true
        },
        friends: [{
            ref: "User",
            type: mongoose.Schema.Types.ObjectId,
        },],

    },
    { versionKey: false }
)

export default mongoose.model(`User`, User, `User`)