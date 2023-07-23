import { Request, Response } from "express";
import Hobby from "../models/hobbyInterface";
import hobbyEngine from "../queryEngines/hobbyQueryEngine";
import { basicResultHandler } from "../utils/utils";

const hobbyController = {
  async addHobbies(req: Request, res: Response): Promise<void> {
    const newHobby: Hobby = {
      ...req.body,
    };

    const queryResult: number | null = await hobbyEngine.addHobbies(newHobby);
    basicResultHandler(res, queryResult);
  },

  async getAllHobbies(req: Request, res: Response): Promise<void> {
    const queryResult: Hobby[] | null = await hobbyEngine.getAllHobbies();
    basicResultHandler(res, queryResult);
  },

  async updateHobbies(req: Request, res: Response): Promise<void> {
    const queryResult: number | null = await hobbyEngine.updateHobbies(
      req.body,
      Number(req.params.id)
    );
    basicResultHandler(res, queryResult);
  },
};

export default hobbyController;
