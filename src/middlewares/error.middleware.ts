import { Response, Request, NextFunction } from "express"
import { AppError } from "../errors/appError"

export const handleError = (err: any, req: Request, res: Response, _:NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      statusCode: err.statusCode,
      message: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    statusCode: 500,
    message: "Internal server error!"
  })
}
