import { IImage } from '../../interfaces/image';
import { APIUrl } from '../../constants/config';

export let id = 0;
export const uploads: IImage[] = [];

export const uploadPhotos = (documents: Express.Multer.File[]): IImage[] => {

    documents.forEach(({ filename, path }) => uploads.push({
        name: filename,
        path: path,
        raw: `${APIUrl}/${path}`,
    }))

    return uploads;
};
export const getPhotos = (): IImage[] => { return uploads };