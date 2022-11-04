export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}