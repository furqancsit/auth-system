import Router from "express";
import {
  getMe,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.midlleware.js";
import googleLogin from "../controllers/googleLogin.js";

const route = Router();

route.post("/register", register);
route.post("/login", login);
route.get("/me", protect, getMe);
route.post("/logout", logout);

route.post("/google-login", googleLogin )
export default route;
