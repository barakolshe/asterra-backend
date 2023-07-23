import { QueryResult } from "pg";
import Hobby from "../models/hobbyInterface";
import { execQuery } from "../db";
import { REQUEST_FAILED } from "../consts";

export default class hobbyQueryEngine {
  static async addHobbies(hobby: Hobby): Promise<number | null> {
    try {
      const query = `INSERT INTO hobbies (user_id, hobbies) VALUES ($1, $2) RETURNING user_id`;
      const res = await execQuery(query, hobby.user_id, hobby.hobbies);
      return res.rows[0].user_id;
    } catch (err) {
      console.error(err, hobby);
      return REQUEST_FAILED;
    }
  }

  static async updateHobbies(
    hobby: Hobby,
    user_id: number
  ): Promise<number | null> {
    try {
      const query = `UPDATE hobbies
      SET hobbies = $1
      WHERE user_id = $2 RETURNING user_id;`;
      const res = await execQuery(query, hobby.hobbies, user_id);
      console.log(res);
      return res.rows[0].user_id;
    } catch (err) {
      console.error(err, hobby);
      return REQUEST_FAILED;
    }
  }

  static async getAllHobbies(): Promise<Hobby[] | null> {
    try {
      const query = `SELECT * FROM hobbies`;
      const res = await execQuery(query);
      return this.mapResultToModels(res);
    } catch (err) {
      console.error(err);
      return REQUEST_FAILED;
    }
  }

  private static mapResultToModels = (res: QueryResult): Hobby[] =>
    res.rows.map((row) => ({
      ...row,
    }));
}
