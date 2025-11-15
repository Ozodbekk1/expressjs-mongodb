/** @format */

import userModel from "../models/user.model.js";

export const createUser = async (req, res) => {
  const { title, body } = req.body;
  try {
    const user = await userModel.create({ title, body });
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, body } = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(
      _id,
      { title, body },
      { new: true } // Returns the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error updating user",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedUser = await userModel.findByIdAndDelete({ _id });

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      data: deletedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error deleting user",
      error: error.message,
    });
  }
};
