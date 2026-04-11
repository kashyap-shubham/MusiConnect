import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/errors/ApiError";

export function requireAuth(
  req: Request,
  _res: Response,
  next: NextFunction
) {

  if (!req.user) {
    return next(
      new ApiError(
        401,
        "Unauthorized - Please login first"
      )
    );
  }

  next();

}