/** @format */

import { Router } from "express";
import { createPost } from "../controller/post.controller.js";

const postRoute = Router();

postRoute.post("/create/post", createPost);

export default postRoute;
