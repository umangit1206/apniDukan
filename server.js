import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./Config/db.js";
import cors from "cors";
import authRoutes from "./Route/authRoute.js";
import categoryRoutes from "./Route/categoryRoutes.js";
import productRoutes from "./Route/productRoutes.js";
//congig dot env file
dotenv.config();

//rest Object
const app = express();
//database Connection
connectDB();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>welcome To Apni Dukan Mern Stack Project</h1>");
});

//Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Runing On ${process.env.Dev_Mode} ${PORT}`.bgCyan.white);
});
