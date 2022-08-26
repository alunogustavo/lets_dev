import { Request, Response } from "express";
import { ReadAllUsersServices } from "../services/ReadAllUsersServices"

class ReadAllUsersController{
    async control (request: Request, response: Response): Promise<Response> {
        const { id } = request.user

        const readAllUsersServices = new ReadAllUsersServices();

        const getAllusers = await readAllUsersServices.execute({ userId: id});

        return response.status(200).json(getAllusers);
    } 
}

export { ReadAllUsersController}