/** @format */

import { Router } from "express";
import { createUser } from "../controller/user.controller.js";
import { getAllUserInfo, getOneUser } from "../controller/post.controller.js";

const userRoute = Router();

userRoute.post("/create/user", createUser);
userRoute.get("/getallinfo", getAllUserInfo);
userRoute.get("/getByID/:userID", getOneUser);
userRoute.get("/get/info", (req, res) => {
  res.send("your api is live ");
});

export default userRoute;
