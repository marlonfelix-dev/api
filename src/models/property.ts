/**
 * Modelo de Imóvel
 * @class property
 */ 

import { Schema, model } from 'mongoose';

let propertySchema: Schema = new Schema({
    /**
     * @var propertySchema
     * Atributos de Imoveis
     */    
    title:       String,
    description: String,
    value:       Number,
    address:     { type: String, required: true },
    createdAt:   { type: Date, default: Date.now }
});

// Exporta o modelo
export default model('Property', propertySchema);
