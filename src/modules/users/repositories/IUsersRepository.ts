import User from '../infra/typeorm/entities/User';
import ICreateuserDTO from '../dtos/ICreateUsersDTO';
import IFindAllProvidersDTO from '../dtos/IFindAllProvidersDTO';

export default interface IUsersRepositories {
  findAllProviders(data: IFindAllProvidersDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateuserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
