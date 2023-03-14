import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { iCategories } from "../../interfaces/categories.interfaces"
import { allCategoriesSchema } from "../../schemas/categories.schemas"

const readAllCategoriesService = async():Promise<iCategories> => {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  const findCategories: Array<Category> = await categoryRepository.find()

  const categories = allCategoriesSchema.parse(findCategories)

  return categories
}

export default readAllCategoriesService

