import multer from 'multer';
import path from 'path';

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Solo se permiten imágenes (jpeg, jpg, png, webp)'));
    }
};

const createUploadMiddleware = (folder) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `src/public/img/${folder}`);
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    });

    return multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })
           .single('image');
};

export default createUploadMiddleware;