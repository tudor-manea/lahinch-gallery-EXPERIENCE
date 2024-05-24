import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { artist } = req.query;
  const videosDir = path.join(process.cwd(), 'public', artist as string, 'videos');

  try {
    const files = fs.readdirSync(videosDir);
    const videos = files.map(file => path.join('/', artist as string, 'videos', file));
    res.status(200).json(videos);
  } catch (error) {
    console.error("Failed to read videos directory", error);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}