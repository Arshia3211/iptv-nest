import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

export const multerConfig = {
  dest: './uploads',
};

export const multerOptions = {

  limits: {
    fileSize: 5 * 1024 * 1024, 
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml',
      'image/bmp',
      'image/tiff',
    ];
    
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      
      cb(new Error(`File type not supported. Only image formats are allowed.`), false);
    }
  },
  
  storage: diskStorage({
    destination: (req: any, file: any, cb: any) => {
      const uploadPath = multerConfig.dest;

      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }
      cb(null, uploadPath);
    },

    filename: (req: any, file: any, cb: any) => {
      const fileExtName = extname(file.originalname);
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      cb(null, `${randomName}${fileExtName}`);
    },
  }),
};