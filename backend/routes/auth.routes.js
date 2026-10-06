import Router from "express";
import { getMe, login, logout, register } from "./auth.controller.js";

const route = Router();

route.post("/register", register);
route.post("/login", login);
route.get("/me", getMe);
route.post("/logout", logout);
