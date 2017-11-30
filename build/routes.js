"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = require("./routes/userRoutes");
const propertyRoutes_1 = require("./routes/propertyRoutes");
const urlBase = '/api/v1';
const allRoutes = (server) => {
    // Registra as rotas
    server.use(`${urlBase}/users`, userRoutes_1.default);
    server.use(`${urlBase}/properties`, propertyRoutes_1.default);
    // Default route errorhandler
    server.use(function (req, res, next) {
        res.status(500).json({
            status: 500,
            msg: `Error on route. This route exist?`,
            route: req.originalUrl
        });
        next();
    });
};
exports.default = allRoutes;
