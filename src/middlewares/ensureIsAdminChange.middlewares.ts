import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"

const ensureIsAdminChangeMiddleware = async(request:Request, response:Response, next:NextFunction):Promise<void> => {

  const userID: number = parseInt(request.params.id)
  const authenticatedAdmin: boolean = request.user.admin
  const acessID: number = request.user.id

  if(!authenticatedAdmin && userID !== acessID){
    throw new AppError("Insufficient permission",403)
  }

  return next()
}

export default ensureIsAdminChangeMiddleware