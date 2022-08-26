import { Response, Request } from "express";
import { ReadProfileService } from "../services/ReadProfileService";

class ReadProfileController {
    async control(request: Request, response: Response): Promise<Response> {
        const { id } = request.body || request.user as unknown as {
            id: string} || request.user as unknown as { id: string };

        const readProfileService = new ReadProfileService();

        const userProfile = await readProfileService.execute({ id });

        return response.status(200).json(userProfile);
    }
}

export { ReadProfileController }