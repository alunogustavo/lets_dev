import { prisma } from "../../../prisma/PrismaClient";
import { UserEntity } from "../entities/UserEntity";

type CreateUserDTO = {
    userData: UserEntity;
}

type findByEmailDTO = {
    email: string;
}

type FindByIdDTO ={
    id: string;
}

type UpdateUserDTO ={
    id: string;
    userData: Partial<UserEntity>;
}

type DeleteUserDTO ={
    id: string;
}

class UsersRepository {
    async create({ userData }: CreateUserDTO) {
        const newUser = await prisma.user.create({
            data: {
                ...userData
            }
        })

        return newUser;
    };

    async findByEmail({ email }: findByEmailDTO): Promise<UserEntity> {
        const userFound = await prisma.user.findFirst({
            where: {
                email
            }
        });

        return userFound;
    }

    async findById({ id }: FindByIdDTO): Promise<UserEntity> {
        const userFound = await prisma.user.findFirst({
            where: {
                id
            }
        })

        return userFound;
    }

    async update ({ id, userData }: UpdateUserDTO): Promise<UserEntity> {
        const updateUser = await prisma.user.update({
            where: {
                id
            },
            data: userData
        })

        return updateUser 
    }

    async delete({ id }: DeleteUserDTO): Promise<void>{
        await prisma.user.delete({
            where: {
                id
            }
        })
    }
}

export { UsersRepository }