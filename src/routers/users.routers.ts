import { Router } from "express"
import { createUserController, deleteUserController, readUsersController, updateUserController } from "../controllers/users.controllers"
import { ensureDataIsValidMiddleware, ensureEmailIsAvaliableMiddleware, ensureIsAdminChangeMiddleware, ensureIsAdminMiddleware, ensureTokenIsValidMiddleware, ensureUserExistsMiddleware } from "../middlewares"
import { requestUserSchema, updateUserSchema } from "../schemas/users.schemas"

const userRouter: Router = Router()

userRouter.post("",ensureDataIsValidMiddleware(requestUserSchema), ensureEmailIsAvaliableMiddleware,createUserController)
userRouter.get("",ensureTokenIsValidMiddleware, ensureIsAdminMiddleware,readUsersController)
userRouter.patch("/:id",ensureTokenIsValidMiddleware,ensureUserExistsMiddleware,ensureIsAdminChangeMiddleware,ensureDataIsValidMiddleware(updateUserSchema),ensureEmailIsAvaliableMiddleware,updateUserController)
userRouter.delete("/:id",ensureTokenIsValidMiddleware, ensureUserExistsMiddleware,ensureIsAdminMiddleware,deleteUserController)

export default userRouter