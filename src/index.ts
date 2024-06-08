import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

const app = express()

app.use(cors({
    credentials: true,
}))

app.use(cookieParser())
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
