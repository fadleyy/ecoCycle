import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import db from "./config/database.js";
import cookieParser from "cookie-parser";
import Users from "./models/user_model.js";
import router from "./routes/index.js";
dotenv.config()
const app = express();


try {
    await db.authenticate()
    console.log('yesss konekk!')
    // await Users.sync()
} catch (error) {
    console.log('yahhh ga konek!')
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(5000, () => console.log('Server running at port 5000'));