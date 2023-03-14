import { z } from "zod"
import { allRealEstate, realEstateRequestSchema, realEstateSchema } from "../schemas/realEstate.schemas"

type iRealEstate = z.infer<typeof realEstateSchema>
type iRealEstateRequest = z.infer<typeof realEstateRequestSchema>
type iRealEstates = z.infer<typeof allRealEstate>

export { iRealEstate, iRealEstateRequest, iRealEstates}