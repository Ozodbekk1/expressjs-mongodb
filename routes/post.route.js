/** @format */

import { Router } from "express";
import {
  createPost,
  deletePost,
  updatePost,
} from "../controller/post.controller.js";

const postRoute = Router();

postRoute.post("/create/post", createPost);

postRoute.put("/update/:_id", updatePost);

postRoute.delete("/delete/:_id", deletePost);

export default postRoute;
