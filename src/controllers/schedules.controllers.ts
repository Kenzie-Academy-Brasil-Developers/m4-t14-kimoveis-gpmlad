import { Request, Response } from "express"

const createScheduleController = async(request:Request, response:Response):Promise<Response> => {
  return response.json()
}

const readScheduleByIdController = async(request:Request, response:Response):Promise<Response> => {
  return response.json()
}

export{
  createScheduleController,
  readScheduleByIdController
}