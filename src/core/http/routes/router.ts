import Router from 'express';
import planRouter from './plan/router';
import superUserRouter from './superUser/router';

export function BuildMainRouter() {

    const mainRouter = Router();

    // Add all the routes
    mainRouter.use("/admin", superUserRouter);
    mainRouter.use("/plan", planRouter);

    return mainRouter;  

}   

