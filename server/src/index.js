import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === 'production'
        ? '.env.production'
        : '.env.local'
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.get('/api/test', (req, res) => {
    res.json({ message: `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}` });
});

app.listen(PORT, () => {
    console.log(`Running in ${process.env.NODE_ENV} mode`);
    console.log(`Server running on port ${PORT}`);
});

export default app;