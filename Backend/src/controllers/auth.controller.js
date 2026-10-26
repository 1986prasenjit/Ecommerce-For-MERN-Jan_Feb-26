import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"

const registerUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            throw new Error("All fields are required")
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error("Sorry user already exists")
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword
        });

        if (!newUser) {
            throw new Error(`Error while regsitering the User ${Error?.message}`)
        }

        return res
            .status(201)
            .json({ message: "User registered Successfully", newUser })

    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error while registering the user", data: error.message })
    }
}

export { registerUser }