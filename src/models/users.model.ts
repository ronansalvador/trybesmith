import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser(body: IUser): Promise<IUser> {
    const { username, classe, level, password } = body;
    const result = await this.connection
      .execute(`
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);
      `, [username, classe, level, password]);

    return result as unknown as IUser;
  }
}