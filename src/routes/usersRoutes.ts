import express from "express";
import userController from "../controllers/usersController";

const router: express.Router = express.Router();

router.delete("/:id", userController.deleteUser);

router.post("/", userController.addUser);

router.get("/users-hobbies", userController.getAllUsersWithHobbies);

export default router;
