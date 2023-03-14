import { z } from "zod"

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().optional().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish()
})

const requestUserSchema = userSchema.omit({
  id:true,
  createdAt:true,
  updatedAt: true,
  deletedAt:true
})

const returnUserSchema = userSchema.omit({password:true})

const allUsersSchema = z.array(returnUserSchema)

const updateUserSchema = requestUserSchema.partial().omit({admin:true})

export {
  allUsersSchema,
  returnUserSchema,
  requestUserSchema,
  userSchema,
  updateUserSchema
}