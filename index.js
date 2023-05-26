import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan"
import dotenv from "dotenv"
import connectDB from "./config/database.js"


const app = express()

//database 연결
dotenv.config()

connectDB()

import orderRouter from "./routing/order.js"
import productRouter from "./routing/product.js"

//middleware 설정

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use("/order", orderRouter)
app.use("/product", productRouter)



const port = process.env.PORT
app.listen(port, console.log('server started at ${port}'))