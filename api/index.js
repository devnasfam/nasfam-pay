import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import virtualAccountRoutes from './routes/virtualAccountRoute.js';
import webhookRoutes from './routes/webhookRoute.js';
import { errorHandler } from './middlewares/errorMiddleWare.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/virtual-account', virtualAccountRoutes);
app.use('/api/webhook', webhookRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
