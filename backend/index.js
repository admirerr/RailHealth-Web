const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const fs = require("fs");
const cors = require("cors");

//Routes

const passengerRoutes = require("./routes/passengerRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
const allowedOrigins = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
//middlewares
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", passengerRoutes);
app.use("/",appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));