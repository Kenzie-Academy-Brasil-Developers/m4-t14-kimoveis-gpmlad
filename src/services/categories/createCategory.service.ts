import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { iCategory, iCategoryRequest } from "../../interfaces/categories.interfaces"
import { categorySchema } from "../../schemas/categories.schemas"

const createCategoryService = async(categoryData:iCategoryRequest):Promise<iCategory> => {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  const category: Category = categoryRepository.create(categoryData)
  await categoryRepository.save(category)

  const newCategory = categorySchema.parse(category)
  return newCategory
}

export default createCategoryService