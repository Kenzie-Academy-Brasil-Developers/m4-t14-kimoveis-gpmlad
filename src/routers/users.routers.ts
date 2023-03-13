import { Router } from "express"
import { createUserController, deleteUserController, readUsersController, updateUserController } from "../controllers/users.controllers"
import { ensureDataIsValidMiddleware } from "../middlewares"
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware"
import { requestUserSchema, updateUserSchema } from "../schemas/users.schemas"

const userRouter: Router = Router()

userRouter.post("",ensureDataIsValidMiddleware(requestUserSchema),createUserController)
userRouter.get("",readUsersController)
userRouter.patch("/:id",ensureDataIsValidMiddleware(updateUserSchema),ensureUserExistsMiddleware,updateUserController)
userRouter.delete("/:id",ensureUserExistsMiddleware,deleteUserController)

export default userRouter