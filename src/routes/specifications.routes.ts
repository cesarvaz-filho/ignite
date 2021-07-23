import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import createSpecificationController from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController().handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };