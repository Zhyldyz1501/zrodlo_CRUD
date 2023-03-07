import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import intialDbConnection from './mongodb/connect.js';
import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
const { intialDbConnection } = require("./mongodb/connect.js");
intialDbConnection();
app.get('/', (req, res) => {
    res.send({message: 'Hello World'})
})

app.use("/users", userRouter);
app.use("/properties", propertyRouter)

const startServer = async () => {
    try {
        intialDbConnection(process.env.MONGODB_URL)
        app.listen(8080, () =>
          console.log(
            "Server started listening on port http://localhost:8080"
          )
        );
    }
    catch (error){
        console.log(error)
    }
}
startServer()