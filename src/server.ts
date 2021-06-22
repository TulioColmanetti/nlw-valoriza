import 'reflect-metadata';
import express from 'express';

// By default JS looks an index.js file inside the imported folder
import './database';

// @types/express
const app = express();

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
