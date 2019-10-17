import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3030;

app.use(cors());

// app.use(express.static(path.join(__dirname, '/../public/index.html')));

app.listen(port, () => {
	console.log(`Server running on: http://localhost:${port}`);
});
