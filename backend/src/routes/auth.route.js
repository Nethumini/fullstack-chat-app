import express from "express";
import {login, logout, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/signup", (req,res) => {
    res.send("signup route")
})

router.get("/login", (req,res) => {
    res.send("login route")
})

router.get("/logout", (req,res) => {
    res.send("logout route")
})

export default router;