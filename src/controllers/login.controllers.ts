import { Request, Response } from "express";
import { iLogin } from "../interfaces/login.interfaces";
import createLoginService from "../services/login/createlogin.services"

const createLoginController = async(request:Request, response:Response): Promise<Response> => {

  const loginData: iLogin = request.body

  const token = await createLoginService(loginData)

  return response.status(200).json({token: token})
}

export {createLoginController}
