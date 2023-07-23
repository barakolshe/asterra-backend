import { QueryResult } from "pg";
import User from "../models/userInterface";
import { execQuery } from "../db";
import { REQUEST_FAILED } from "../consts";

export default class userQueryEngine {
  static async addUser(user: User): Promise<number | null> {
    try {
      const query = `INSERT INTO users (first_name, last_name, address, phone_number) VALUES ($1, $2, $3, $4) RETURNING id`;
      const res = await execQuery(
        query,
        user.first_name,
        user.last_name,
        user.address,
        user.phone_number
      );
      return res.rows[0].id;
    } catch (err) {
      console.error(err, user);
      return REQUEST_FAILED;
    }
  }

  static async getAllUsersWithHobbies(): Promise<User[] | null> {
    try {
      const query = `SELECT u.id, u.first_name, u.last_name, u.address, u.phone_number, h.hobbies
      FROM users u
      LEFT JOIN hobbies h ON u.id = h.user_id;`;
      const res = await execQuery(query);
      return this.mapResultToModels(res);
    } catch (err) {
      console.error(err);
      return REQUEST_FAILED;
    }
  }

  static async deleteUser(id: number): Promise<number | null> {
    try {
      const query = `DELETE FROM users WHERE id = $1 RETURNING id`;
      const res = await execQuery(query, id);
      return res.rows[0].id;
    } catch (err) {
      console.error(err);
      return REQUEST_FAILED;
    }
  }

  private static mapResultToModels = (res: QueryResult): User[] =>
    res.rows.map((row) => ({
      ...row,
    }));
}
