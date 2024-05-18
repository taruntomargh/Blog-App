import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { User } from './models/User.js';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"

const app = express();
const PORT = 8000;

dotenv.config({
    path: "./.env"
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DBNAME}`);

const salt = bcrypt.genSaltSync(10);
const secret = process.env.JWT_SECRET;

app.post('/register', async (req, res)=>{
    const { username, email, password } = req.body.data;

    try {
        const newUser = await User.create({
            username: username,
            email: email,
            password: bcrypt.hashSync(password, salt)
        });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error);
        console.log("Backend register ERROR: ",error);
    }
});

app.post('/login', async (req, res)=>{
    const { email, password } = req.body.data;

    try {
        const existingUser = await User.findOne({email});

        const passwordMatch = bcrypt.compareSync(password, existingUser.password);

        if(passwordMatch){
            jwt.sign({username: existingUser.username, id: existingUser._id}, secret, {}, (error, token)=>{
                if(error) throw error;

                res.cookie("token", token).json(existingUser);
                console.log(token);
            });
        } else {
            res.status(400).json("Password didn't match");
        }
    } catch (error) {
        res.status(400).json(error);
        console.log("Backend login ERROR: ", error);
    }
});

app.listen(PORT, (req, res)=>{
    console.log(`Server is listening at port ${PORT}`);
});