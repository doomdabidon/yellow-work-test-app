import { Request, Response } from 'express'
import * as photoService from '../../services/photos/photos.service';

export const uploadPhoto = (req: Request, res: Response) => {
    try {
        const photos = photoService.uploadPhotos(req.files as Express.Multer.File[]);

        res.status(200).json({
            photos
        });
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};

export const getPhotos = (req: Request, res: Response) => {
    try {
        const photos = photoService.getPhotos();

        res.status(200).json({
            photos
        });
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};