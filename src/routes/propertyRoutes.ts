import * as express from 'express';
import {Request, Response, NextFunction} from 'express';

const propertyRoutes = express.Router();

// Importando os controllers
import { getAll, findById, createProperty } from '../controllers/propertyController';

//Pesquisa todos os imoveis
propertyRoutes.get('/', getAll);

// Pesquisa imovel por ID
propertyRoutes.get('/:id', findById);

// Cria um novo imovel
propertyRoutes.post('/', createProperty);

export default propertyRoutes;
