import userModels from "../models/User.js";
//createuser
const Createuser = async (req, res) => {
  try {
    const { name, email, city, course } = req.body;
    const Newuser = new userModels({
      name,
      email,
      city,
      course,
    });
    await Newuser.save();

    res
      .status(200)
      .json({ sucess: true, Message: "user created sucessfully ", Newuser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, Message: "internal server error" });
  }
};
//get all user
const GetUser = async (req, res) => {
  try {
    const users = await userModels.find();
    if (!users || users.length == 0) {
      return res.status(404).json({ Message: "no user found" });
    }
    res.status(200).json({ sucess: true, Message: "users are", users });
  } catch (error) {
    return res.status(500).json({ Message: "internal server error" });
  }
};
//get user one
const GetUserOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModels.findById(id);
    if (!user || user.length == 0) {
      return res.status(404).json({ Message: "no user found" });
    }
    res.status(200).json({ sucess: true, Message: "users are", user });
  } catch (error) {
    return res.status(500).json({ Message: "internal server error" });
  }
};
//updateuser
const UpdateUser = async (req, res) => {
  try {
    // const { id } = req.params.id;

    const updateuser = await userModels.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updateuser) {
      return res
        .status(404)
        .json({ Message: "no user exit in this Id to update" });
    }
    res
      .status(200)
      .json({ sucess: true, Message: "user updated Sucessfully", updateuser });
  } catch (error) {
    res.status(500).json({ Message: "internal server errro" });
  }
};
//delete user
const DeleteUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    const deleteuser = await userModels.findByIdAndDelete(UserId);
    if (!deleteuser || deleteuser.length == 0) {
      return res
        .status(404)
        .json({ Message: "no user exit in this Id to delete" });
    }
    res
      .status(200)
      .json({ sucess: true, Message: "user deleted Sucessfully", deleteuser });
  } catch (error) {
    res.status(500).json({ Message: "internal server error" });
  }
};
export { Createuser, GetUser, UpdateUser, DeleteUser, GetUserOne };
