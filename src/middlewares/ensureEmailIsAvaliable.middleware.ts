import { Request,Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureEmailIsAvaliableMiddleware = async(request:Request, response:Response, next:NextFunction):Promise<void> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  if(request.body.email !== undefined){

    const findUser = await userRepository.findOne({
      where:{
        email: request.body.email
      }
    })
    console.log(findUser)
    if(!findUser){
      return next()
    }

    throw new AppError("Email already exists",409)
  }

  return next()

}

export default ensureEmailIsAvaliableMiddleware