import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import  routes from './routes'
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((resquest: Request, response: Response, error: Error , next: NextFunction) => {

    if(error instanceof AppError)
    {
        return response.status(error.statusCode).json({
            status: 'error', 
            message: error.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server Error'
    });

});
app.listen(3333,()=>{
    console.log("Servidor Ligado");
});
