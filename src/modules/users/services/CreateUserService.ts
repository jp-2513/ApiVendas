import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../entities/Users";
import UsersRepository from "../typeorm/repositories/UsersRepository";


interface IRequest {
     name: string;
     email:string;
     password:string;
}

class CreateUserService {
    public async execute({name,email,password}: IRequest) :Promise <User>
    {
        const usersrepository = getCustomRepository(UsersRepository);
        const emailExists =  await usersrepository.findByEmail(email);
        if(emailExists){
            throw new AppError('Email address alredy used.');
        }
        const user = usersrepository.create({
            name,
            email,
            password,
        });
        await usersrepository.save(user);
        return user;
    }
}

export default CreateUserService;