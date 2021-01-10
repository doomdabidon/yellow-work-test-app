import { IInage } from '../../interfaces/image';
import { APIUrl } from '../../constants/config';

export let id = 0;
export const uploads: IInage[] = [];

export const uploadPhotos = (documents: Express.Multer.File[]): IInage[] => {

    documents.forEach(({ filename, path }) => uploads.push({
        name: filename,
        path: path,
        raw: `${APIUrl}/${path}`,
    }))

    return uploads;
};
export const getPhotos = (): IInage[] => { return uploads };