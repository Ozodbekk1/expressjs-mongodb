/** @format */

import postModel from "../models/post.model.js";

// create post

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
    res.status(500).json({
      success: false,
      message: "Error creating post",
      error: error.message,
    });
  }
};

// get all of user's info

const getAllUserInfo = async (req, res) => {
  try {
    const posts = await postModel.find().populate("user");
    if (!posts) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    res.json(posts);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error finding users",
      error: error.message,
    });
  }
};

// get one user info

const getOneUser = async (req, res) => {
  const post = await postModel.find({ user: req.params.userId });

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  res.status(200).json({
    success: true,
    data: post,
  });
};

// update user by id

const updatePost = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, content } = req.body;

    const updatedPost = await postModel.findByIdAndUpdate(
      _id,
      { title, content },
      { new: true } // Returns the updated document
    );

    if (!updatedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error updating post",
      error: error.message,
    });
  }
};

// delete post by id

const deletePost = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedPost = await postModel.findByIdAndDelete({ _id });

    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      data: deletedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error deleting post",
      error: error.message,
    });
  }
};

export { createPost, getAllUserInfo, getOneUser, updatePost, deletePost };
