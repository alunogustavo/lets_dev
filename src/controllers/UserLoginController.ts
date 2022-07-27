import { Request, Response } from "express";
import { UserLoginService } from "../services/UserLoginService";

class UserLoginController {
    async control(request: Request, response: Response): Promise<Response>{
        const { email, password } = request.body;

        const UserLoginService = new UserLoginService();

        const newToken = await UserLoginService.execute({ email, password });

        return response.status(200).json(newToken);
    }
}

export { UserLoginController }