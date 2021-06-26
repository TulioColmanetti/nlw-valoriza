import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';

// By default JS looks an index.js file inside the imported folder
import './database';

// @types/express
const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

// http://localhost:3000
app.listen(3000, () => console.log('Server is running'));

/**
 * GET    => Search information
 * POST   => Insert (create) information
 * PUT    => Change information
 * DELETE => Remove information
 * PATCH  => Change one specific information
 */

/**
 * Parameter types
 * Route Params => http://localhost:3000/produtos/12345678
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * Body Params  => {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 */

/**
 * server <-> routes <-> controller <-> service
 */
