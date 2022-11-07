import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces';

type Usernames = {
  username: string
};

type Passwords = {
  password: string
};

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

  async getPasswords(username: string) {
    const [[{ password }]] = await this.connection.execute<(
    Passwords & RowDataPacket)[]>(
      'SELECT password FROM Trybesmith.Users WHERE username = ?',
      [username],
      );
  
    return password;
  }

  async getUsers() {
    const [result] = await this.connection.execute<(Usernames[] & RowDataPacket)[]>(
      'SELECT username FROM Trybesmith.Users');
  
    const users = result.map((e) => e.username); 
    return users;
  }
}