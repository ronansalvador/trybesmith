import { Router } from 'express';
import login from '../controllers/login.controller';
import validateLogin from '../middlewares/validateLogin';
import verifyUser from '../middlewares/verifyUser';

const loginRoute = Router();

loginRoute.post('/', validateLogin, verifyUser, login);

export default loginRoute;
