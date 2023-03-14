import "express-async-errors"
import { handleErrors } from "./errors"
import express, {Application} from "express"
import { categoryRouter, loginRouter, realEstateRouter, userRouter } from "./routers"

const app: Application = express()
app.use(express.json())

app.use("/users",userRouter)
app.use("/login", loginRouter)
app.use("/categories", categoryRouter)
app.use("/realEstate", realEstateRouter)

app.use(handleErrors)

export default app