/*import { Request, Response } from "express";
import { createLoginService } from "../services/login/createLogin.services"

const createLoginController = async(request:Request, response:Response): Promise<Response> => {

  const token = await createLoginService(request.body)

  return response.status(200).json({token: token})
}

export {createLoginController}
*/