"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userRoutes = express.Router();
userRoutes.get('/', (req, res) => {
    res.status(200).json({ hello: 'Our World' });
});
exports.default = userRoutes;
