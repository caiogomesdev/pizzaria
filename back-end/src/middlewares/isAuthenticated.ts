import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [_, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.SECRET_JWT || "123");
    req.user_id = sub?.toString();
    return next();
  } catch {
    return res.status(401).end();
  }
}
