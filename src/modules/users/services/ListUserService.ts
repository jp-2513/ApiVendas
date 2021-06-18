
import { getCustomRepository } from "typeorm";
import User from "../entities/Users";
import UsersRepository from "../typeorm/repositories/UsersRepository";



class ListUserService {
    public async execute() :Promise <User[]>
    {
        const usersrepository = getCustomRepository(UsersRepository);

        const users = usersrepository.find();

        return users;
    }
}

export default ListUserService;