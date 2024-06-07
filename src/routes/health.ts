import { Router } from 'express'
import type { Request, Response, NextFunction } from 'express'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    code: 200,
    message: 'Response success! in development'
  })
})
