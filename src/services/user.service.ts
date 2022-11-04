import connection from '../models/connection';
import UserModel from '../models/users.model';
import { IUser } from '../interfaces';

export default class UserService {
  userModel = new UserModel(connection);

  async createUser(body: IUser): Promise<IUser> {
    const result = await this.userModel.createUser(body);
    return result;
  }
}