import { prisma } from "../../../prisma/PrismaClient";
import { TokenEntity } from "../entities/TokenEntity";

type CreateUserDTO = {
  tokenData: Partial<TokenEntity>;
}

type FindByUserDTO = {
    userId: string;
}

type DeleteTokenDTO = {
    userId: string;
}

class TokensRepository {
  async create({ tokenData: { userId, token } }: CreateUserDTO): Promise<void> {
    await prisma.tokens.create({
      data: {
        userId,
        token
      }
    })
  };

  async delete({ userId }: DeleteTokenDTO): Promise<void> {
    await prisma.tokens.delete({
        where: {
            userId
        }
    })
  }

  async findByUserId({ userId }: FindByUserDTO): Promise<TokenEntity> {
    const foundedToken = await prisma.tokens.findFirst({
        where: {
            userId
        }
    });

    return foundedToken;
  }
}

export { TokensRepository };
