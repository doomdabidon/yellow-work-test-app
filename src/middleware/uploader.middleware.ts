import multer from 'multer';
import path from 'path';

let id = 0;

const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, 'public/');
      },
      filename(req, file, cb) {      
        const ext = path.extname(file.originalname);
        const name = id + ext;
        id += 1;
        cb(null, name);
      },
    }),
});

export default upload;