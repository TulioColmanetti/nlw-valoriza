import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Receive token
  const authToken = req.headers.authorization;

  // Validate if token is filled
  if (!authToken) {
    return res.status(401).end();
  }

  // Remove "Bearer" from authentication token
  const [, token] = authToken.split(' ');

  // Validate if token is valid
  try {
    const { sub } = verify(
      token,
      '6d66664002270a90de0b8c804f35b8e0'
    ) as IPayload;

    // Retrieve user info
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
