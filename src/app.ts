import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import userRoutes from './routes/user.routes'

dotEnv.config();

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes)
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});