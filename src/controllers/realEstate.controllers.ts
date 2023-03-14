import { Request, Response } from "express"
import { iRealEstateRequest, iRealEstates } from "../interfaces/realEstate.interfaces"
import { createRealEstateService, readRealEstateService } from "../services/realEstate"


const createRealEstateController = async(request:Request, response:Response):Promise<Response> => {

  const realEstateData: iRealEstateRequest = request.body
  const realEstateReturn = await createRealEstateService(realEstateData)

  return response.status(201).json(realEstateReturn)
}

const readRealEstateController = async(request:Request, response:Response):Promise<Response> => {
  const realEstates = await readRealEstateService()
  return response.status(200).json(realEstates)
}

export {
  createRealEstateController,
  readRealEstateController
}