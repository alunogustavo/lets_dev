import { UserEntity } from "../database/entities/UserEntity";
import { UsersRepository } from "../database/repositories/UsersRepository";
import { AppError } from "../shared/errors";

type TReadAllUsers = {
    userId: string;
}

class ReadAllUsersServices{
    async execute({ userId }: TReadAllUsers ): Promise<Partial<UserEntity>[]> {
      const usersRepository = new UsersRepository ();

      const { idAdmin } = await usersRepository.findById({ id: userId});

      if (!idAdmin) {
        throw new AppError("User must be admin", 403)
      };

      const getAllusers = await usersRepository.findAll();
      if (getAllusers.length < 1 ) {
        throw new AppError("Nenhum usuario encontrado", 404)
      }

      return getAllusers
    }
}

export { ReadAllUsersServices }