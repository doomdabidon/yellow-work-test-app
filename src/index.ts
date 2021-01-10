import express from 'express';
import * as bodyParser from 'body-parser';
import path from 'path';
import { PUBLIC, API } from './constants/routes';
import routers from './routes';

const app = express();
const PORT = 32342;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(PUBLIC, express.static(path.join(__dirname, '..', 'public')));
app.use(API, routers);
app.use('*', (_, res) => res.send('Unsupported endpoint'));

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});