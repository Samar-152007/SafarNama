import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

// Ensure dashcam upload directory exists
const UPLOAD_DIR = path.resolve(process.cwd(), 'uploads/dashcam');
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Disk storage for dashcam media
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || '.mp4';
    const timestamp = Date.now();
    const uniqueId = uuidv4().slice(0, 8);
    cb(null, `dashcam_${timestamp}_${uniqueId}${ext}`);
  },
});

// File filter: 5-second video clips (.mp4, .webm, .mov) or still snapshot frames
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'video/x-matroska',
    'image/jpeg',
    'image/png',
    'image/webp',
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid media type (${file.mimetype}). Only MP4, WebM video clips or JPEG/PNG snapshots are accepted.`));
  }
};

export const uploadDashcamClip = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB maximum for short edge clip
    files: 1,
  },
});

/**
 * Generates a mock pre-signed upload URL for AWS S3 / Cloud Storage
 * Useful when edge devices stream directly to object storage rather than Node event loop
 */
export function generatePresignedUploadUrl(vehicleId, eventType) {
  const fileKey = `dashcam/${vehicleId || 'edge'}_${eventType}_${Date.now()}.mp4`;
  const uploadUrl = `/api/v1/incidents/upload-direct/${encodeURIComponent(fileKey)}`;
  return {
    uploadUrl,
    fileKey,
    expiresInSeconds: 900, // 15 mins
    headers: {
      'Content-Type': 'video/mp4',
    },
  };
}

export default {
  uploadDashcamClip,
  generatePresignedUploadUrl,
  UPLOAD_DIR,
};
