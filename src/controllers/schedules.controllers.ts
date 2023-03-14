import { Request, Response } from "express"
import { createScheduleService } from "../services/schedules"

const createScheduleController = async(request:Request, response:Response):Promise<Response> => {
  const userId: number = request.user.id
  const scheduleData = request.body

  const newSchedule = await createScheduleService(scheduleData,userId)
  return response.status(201).json(newSchedule)
}

const readScheduleByIdController = async(request:Request, response:Response):Promise<Response> => {
  return response.json()
}

export{
  createScheduleController,
  readScheduleByIdController
}