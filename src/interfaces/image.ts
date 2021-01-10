export interface IInage {
    name: string;
    path: string;
    raw: string;
}

export interface MulterFile {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    destination: string,
    filename: string,
    path: string,
    size: number
}