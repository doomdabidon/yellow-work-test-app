import * as express from 'express';
import * as ROUTES_URLS from './constants/routes';

import * as authController from './controllers/auth/auth.controller';
import * as runsController from './controllers/runs/runs.controller';
import * as photosController from './controllers/photos/photos.controller';

import authMiddleware from './middleware/auth.middleware';
import { joiMiddleware, Sources } from './middleware/joi.middleware';
import uploadMiddleware from './middleware/uploader.middleware';

import {
    authSchema,
    runSchema,
    idSchema,
} from './validators/joi.schema';

const router = express.Router();

router.post(ROUTES_URLS.LOGIN, joiMiddleware(authSchema, Sources.BODY), authController.login);
router.post(ROUTES_URLS.REGISTER, joiMiddleware(authSchema, Sources.BODY), authController.register);

router.get(ROUTES_URLS.RUN_REPORT, authMiddleware, runsController.getReport);
router.put(ROUTES_URLS.RUN_ID, authMiddleware, joiMiddleware(idSchema, Sources.PARAMS), joiMiddleware(runSchema, Sources.BODY), runsController.updateRun);
router.get(ROUTES_URLS.RUN_ID, authMiddleware, joiMiddleware(idSchema, Sources.PARAMS), runsController.getRun);
router.get(ROUTES_URLS.RUN, authMiddleware, runsController.getRuns);
router.post(ROUTES_URLS.RUN, authMiddleware, joiMiddleware(runSchema, Sources.BODY), runsController.saveRun);
router.delete(ROUTES_URLS.RUN_ID, authMiddleware, joiMiddleware(idSchema, Sources.PARAMS), runsController.deleteRun);

router.post(ROUTES_URLS.PHOTOS, uploadMiddleware.array('documents'), photosController.uploadPhoto);
router.get(ROUTES_URLS.PHOTOS, photosController.getPhotos);

export default router;