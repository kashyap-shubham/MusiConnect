import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/errors/ApiError";
import { prisma } from "@/lib/prisma";

export async function requireAuth(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  
  if (!req.user) {
    return next(new ApiError(401, "Unauthorized - Please login first"));
  }

  const session = await prisma.session.findUnique({
    where: {
      sessionId: req.sessionID,
    },
  });

  if (!session) {
    throw new ApiError(401, "Session Expired"); 
  }

  if (session.expiresAt < new Date()) {
    await prisma.session.delete({
      where: {
        sessionId: req.sessionID
      },
    });

    throw new ApiError(401, "Session Expired");
  } 

  next();
}