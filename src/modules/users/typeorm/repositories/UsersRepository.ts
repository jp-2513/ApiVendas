import User from "@modules/users/entities/Users";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
    public async findByName(name: string) : Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                name,
            }
        });
        return user;
    }
    public async fingById(id: string) : Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                id,
            }
        });
        return user;
    }
    public async findByEmail(email: string) : Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                email,
            }
        });
        return user;
    }
    
}

export default UsersRepository;