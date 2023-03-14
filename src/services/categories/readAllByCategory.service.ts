import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"

const readAllByCategoryService = async(categoryId: number):Promise<any> => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  const findByCategory = await categoryRepository.find({
    where:{
      id: categoryId
    },
    relations: {
      realEstate:true
    }
  })

  if(findByCategory.length == 0){
    throw new AppError("Category not found",404)
  }

  return findByCategory[0]
}

export default readAllByCategoryService