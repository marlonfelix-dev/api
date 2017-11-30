import Property from '../models/property';
import {Request, Response, NextFunction} from 'express';

// Função que pesquisa e obtem todos os imoveis
export function getAll(req:Request, res:Response, next:NextFunction) {
    Property.find((err, properties) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({properties});
    });
}

// Função que pesquisa o documento pelo Id
export function findById(req:Request, res:Response, next:NextFunction) {
    const _id = req.params.id;
    
    Property.findById(_id, (err, property) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({property});
    });
}

// Função que cria um novo imovel
export function createProperty(req:Request, res:Response, next:NextFunction) {
    const title = req.body.title;
    const description = req.body.description;
    const address = req.body.address;
    const value = parseInt(req.body.value);
   
    // Instancia novo modelo com os atributos da requisição
    const property = new Property({
        title, description, address, value
    });

    property.save((err, property) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(201).json({property});
    });
}
