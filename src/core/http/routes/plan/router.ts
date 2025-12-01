import Router from 'express';


const planRouter = Router();

// Create a Plan
planRouter.post('/admin', async () => {})

// Get all Plans
planRouter.get('/', async () => {})

// Update a plan
planRouter.put('/admin/:planId', async () => {});

// Delete a plan
planRouter.delete('/admin/:planId', async () => {});


export default planRouter;