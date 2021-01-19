import { rest } from 'msw'
import plantsData from './data/plantData';

export const handlers = [
  // Handles a GET /plants request
  rest.get('http://localhost:3333/plants', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(plantsData),
      )
  }),
]