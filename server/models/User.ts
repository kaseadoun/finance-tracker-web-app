import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    dateCreated: {
        type: Date,
        default: new Date(),
    },
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

export default mongoose.model("User", userSchema);