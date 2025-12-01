import Router from 'express';
import planRouter from './plan/router';

export function BuildMainRouter() {

    const mainRouter = Router();

    // Add all the routes
    mainRouter.use("/plan", planRouter);

    return mainRouter;  

}   

