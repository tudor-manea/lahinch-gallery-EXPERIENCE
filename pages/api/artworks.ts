import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { artist } = req.query;
  const artworksDir = path.join(process.cwd(), 'public', artist as string, 'artworks');

  try {
    const files = fs.readdirSync(artworksDir);
    const artworks = files.map(file => path.join('/', artist as string, 'artworks', file));
    res.status(200).json(artworks);
  } catch (error) {
    console.error("Failed to read artworks directory", error);
    res.status(500).json({ error: "Failed to fetch artworks" });
  }
}