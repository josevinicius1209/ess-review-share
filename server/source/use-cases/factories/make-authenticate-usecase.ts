import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { AuthenticateUserUseCase } from "../authenticate-user";

export function makeAuthenticateUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const authenticateUseCase = new AuthenticateUserUseCase(usersRepository);

    return authenticateUseCase;
}