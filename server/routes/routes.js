import express from "express";
import {
  Createuser,
  GetUser,
  UpdateUser,
  DeleteUser,
  GetUserOne
  // GetUserOne,
} from "../controller/UserController.js";
const routers = express.Router();
routers.post("/create", Createuser);
routers.get("/read", GetUser);
routers.get("/update/:id", GetUserOne);
routers.put("/update/:id", UpdateUser);
routers.delete("/delete/:id", DeleteUser);
export default routers;
