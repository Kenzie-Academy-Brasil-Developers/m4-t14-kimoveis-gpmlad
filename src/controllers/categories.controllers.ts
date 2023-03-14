import { Request,Response } from "express"
import { iCategories, iCategory } from "../interfaces/categories.interfaces"
import { readAllByCategoryService,createCategoryService,readAllCategoriesService } from "../services/categories"

const createCategoryController = async(request:Request, response:Response):Promise<Response> => {

  const categoryData: iCategory = request.body
  const newCategory = await createCategoryService(categoryData)
  return response.status(201).json(newCategory)
}

const readAllCategoriesController = async(request:Request, response:Response):Promise<Response> => {
  
  const categories: iCategories = await readAllCategoriesService()

  return response.status(200).json(categories)
}

const readAllByCategoryController = async(request:Request, response:Response):Promise<Response> => {

  const categoryId: number = parseInt(request.params.id)

  const result = await readAllByCategoryService(categoryId)

  return response.status(200).json(result)
}

export {
  createCategoryController,
  readAllByCategoryController,
  readAllCategoriesController
}