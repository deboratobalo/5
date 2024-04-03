import express from "express"
import catRoutes from "./routes/cats.js"
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())


app.use("/", catRoutes)

app.listen(8800)