import { Request, Response } from "express";
import User from "../models/userInterface";
import userEngine from "../queryEngines/userQueryEngine";
import { basicResultHandler } from "../utils/utils";

const userController = {
  async addUser(req: Request, res: Response): Promise<void> {
    const newUser: User = {
      ...req.body,
    };

    const queryResult: number | null = await userEngine.addUser(newUser);
    basicResultHandler(res, queryResult);
  },

  async getAllUsersWithHobbies(req: Request, res: Response): Promise<void> {
    const queryResult: User[] | null =
      await userEngine.getAllUsersWithHobbies();
    basicResultHandler(res, queryResult);
  },

  async deleteUser(req: Request, res: Response): Promise<void> {
    const queryResult: number | null = await userEngine.deleteUser(
      Number(req.params.id)
    );
    basicResultHandler(res, queryResult);
  },
};

export default userController;
