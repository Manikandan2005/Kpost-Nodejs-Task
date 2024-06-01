import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/userLogin.routes.js"
import crudRoutes from './routes/userCRUD.routes.js'

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cookieParser())

app.use("/auth",authRoutes)
app.use("/crud",crudRoutes)

app.listen(PORT,()=>console.log(`App is listening ${PORT}`))
