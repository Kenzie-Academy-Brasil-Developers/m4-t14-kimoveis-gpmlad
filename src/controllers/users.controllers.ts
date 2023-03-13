import { Request,Response } from "express";
import { iUserRequest, iUserReturn, iUsers } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import readUsersService from "../services/users/readUsers.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async(request:Request, response:Response):Promise<Response> => {

  const userData: iUserRequest = request.body

  const newUser: iUserReturn = await createUserService(userData)

  return response.status(201).json(newUser)
}

const readUsersController = async(request:Request, response:Response):Promise<Response> => {

  const users: iUsers = await readUsersService()

  return response.status(200).json(users)
}

const updateUserController = async(request:Request, response:Response):Promise<Response> => {

  const userId: number = parseInt(request.params.id)

  const newUser = await updateUserService(request.body, userId)

  return response.status(200).json(newUser)
}

const deleteUserController = async(request:Request, response:Response):Promise<Response> => {

  const userId:number = parseInt(request.params.id)

  await deleteUserService(userId)

  return response.status(204).json()
}

export {
  createUserController,
  readUsersController,
  updateUserController,
  deleteUserController
}