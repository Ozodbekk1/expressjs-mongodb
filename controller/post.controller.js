/** @format */

import postModel from "../models/post.model.js";

const createPost = async (req, res) => {
  const { title, content, userID } = req.body;
  try {
    const user = await postModel.create({ title, content, user: userID });
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUserInfo = async (req, res) => {
  const posts = await postModel.find().populate("user");
  res.json(posts);
};

const getOneUser = async (req, res) => {
  const post = await postModel.find({ user: req.params.userId });
  res.status(200).json({
    success: true,
    data: post,
  });
};

export { createPost, getAllUserInfo, getOneUser };
