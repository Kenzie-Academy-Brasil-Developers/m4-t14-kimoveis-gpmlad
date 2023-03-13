import "express-async-errors"
import { handleErrors } from "./errors"
import express, {Application} from "express"
import { userRouter } from "./routers"

const app: Application = express()
app.use(express.json())

app.use("/users",userRouter)

app.use(handleErrors)

export default app