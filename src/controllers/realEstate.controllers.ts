import { Request, Response } from "express"
import { iRealEstateRequest } from "../interfaces/realEstate.interfaces"
import { createRealEstateService } from "../services/realEstate"


const createRealEstateController = async(request:Request, response:Response):Promise<Response> => {

  const realEstateData: iRealEstateRequest = request.body
  const realEstateReturn = await createRealEstateService(realEstateData)

  return response.status(201).json(realEstateReturn)
}

const readRealEstateController = async(request:Request, response:Response):Promise<Response> => {

  return response.json()
}

export {
  createRealEstateController,
  readRealEstateController
}