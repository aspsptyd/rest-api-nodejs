import { Router } from 'express'
import type { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Request product data processed...')
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [
      {
        productName: 'Adidas',
        price: 55000
      }
    ]
  })
})
