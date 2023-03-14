import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"

const ensureIsAdminMiddleware = (request:Request, response:Response, next:NextFunction):void => {

  const authenticatedAdmin = request.user.admin

  if(!authenticatedAdmin){
    throw new AppError("Insufficient permission",403)
  }

  return next()
}

export default ensureIsAdminMiddleware