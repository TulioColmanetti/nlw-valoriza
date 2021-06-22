import express from 'express';

// @types/express
const app = express();

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

app.get('/test', (req, res) => {
  return res.send('Olá NLW!');
});

app.post('/test-post', (req, res) => {
  return res.send('Olá NLW! - POST');
});

// http://localhost:3000
app.listen(3000, () => console.log('Server is running'));
