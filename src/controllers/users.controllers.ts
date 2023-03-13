import { Request,Response } from "express";

const createUserController = async(request:Request, response:Response):Promise<Response> => {

  return response.status(201).json()
}

const readUserController = async(request:Request, response:Response):Promise<Response> => {

  return response.status(200).json()
}

const updateUserController = async(request:Request, response:Response):Promise<Response> => {

  return response.status(200).json()
}

const deleteUserController = async(request:Request, response:Response):Promise<Response> => {

  return response.status(200).json()
}

export {
  createUserController,
  readUserController,
  updateUserController,
  deleteUserController
}