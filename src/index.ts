import express from 'express';
import * as bodyParser from 'body-parser';
import path from 'path';
// import swaggerUi from 'swagger-ui-express';
import { PUBLIC, API/*, SWAGGER*/ } from './constants/routes';
import { PORT } from './constants/config';
import routers from './routes';
// import swaggerDoc from '../swagger.json';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(PUBLIC, express.static(path.join(__dirname, '..', '..', 'public')));
// app.use(SWAGGER, swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(API, routers);
app.use('*', (_, res) => res.send('Unsupported endpoint'));

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});