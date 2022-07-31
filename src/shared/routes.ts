import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { UserLoginController } from "../controllers/UserLoginController";


const router = Router();

const createUserController = new CreateUserController();
const userLoginController = new UserLoginController();
const updateUserController = new UpdateUserController();

router.post("/users/create", createUserController.control);
router.post("/users/create", updateUserController.control);
router.post("/users/create", userLoginController.control);

export { router }