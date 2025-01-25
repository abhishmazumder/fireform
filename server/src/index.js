import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: process.env.NODE_ENV === 'production'
        ? '.env.production'
        : '.env.local'
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

const clientDistPath = path.resolve(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

app.get('/api/test', (req, res) => {
    res.json({ message: `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}` });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Running in ${process.env.NODE_ENV} mode`);
    console.log(`Server running on port ${PORT}`);
});

export default app;