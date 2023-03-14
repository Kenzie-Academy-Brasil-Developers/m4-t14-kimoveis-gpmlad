import { Request,Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

const ensureCategoryNameIsAvaliableMiddleware = async(request:Request, response:Response, next:NextFunction):Promise<void> => {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  if(request.body.name !== undefined){

    const findCategory = await categoryRepository.findOne({
      where:{
        name: request.body.name
      }
    })
    if(!findCategory){
      return next()
    }

    throw new AppError("Category already exists",409)
  }

  return next()

}

export default ensureCategoryNameIsAvaliableMiddleware