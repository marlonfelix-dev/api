import * as express from 'express'; 
import { Request, Response } from 'express';

const userRoutes = express.Router();

userRoutes.get('/', (req: Request, res: Response): any => {
    res.status(200).json({hello: 'Our World'});
});

export default userRoutes;