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
