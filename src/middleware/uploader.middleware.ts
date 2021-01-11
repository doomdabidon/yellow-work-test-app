import multer from 'multer';
import path from 'path';
import fs from 'fs';

let id = 0;

const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        const dir = 'public/';
        try {
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
        }catch(err) {
          console.error(err)
        }      
        cb(null, dir);
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