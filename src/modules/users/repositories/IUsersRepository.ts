import User from '../infra/typeorm/entities/User';
import ICreateuserDTO from '../dtos/ICreateUsersDTO';

export default interface IUsersRepositories {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateuserDTO): Promise<User>;
  save(user: User): Promise<User>;
};
