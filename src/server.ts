import "reflect-metadata"
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json";

import dotenv from 'dotenv';
import { router } from './routes';
import "./database";

import "./shared/container"

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(process.env.PORT, () => console.log(
  `Server is running on ${process.env.BASE_URL}`
));