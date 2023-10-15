import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password:
        {
            type: String,
            require: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        country: {
            type: String,
            required: false,
        },
        img: {
            type: String,
        },
        city: {
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: false,
        },

        // is admin is very important in this situation
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);

// to search a file type ctr + p or ctr + e 