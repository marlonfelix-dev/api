import { Application } from 'express';

import userRoutes from './routes/userRoutes';
import propertyRoutes from './routes/propertyRoutes';

const urlBase = '/api/v1';

const allRoutes = (server: Application) => {
  
  // Registra as rotas
  server.use(`${urlBase}/users`, userRoutes);
  server.use(`${urlBase}/properties`, propertyRoutes);

  // Default route errorhandler
  server.use(function(req, res, next) {
    res.status(500).json({
      status: 500,
      msg: `Error on route. This route exist?`,
      route: req.originalUrl
    });
    next();
  });

  
};

export default allRoutes;
