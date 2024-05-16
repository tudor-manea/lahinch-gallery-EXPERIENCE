import {v2 as cloudinary} from "cloudinary"
import prisma from "@/lib/prisma"
import multer from "multer"
import { NextApiRequest, NextApiResponse } from 'next'

cloudinary.config({
  cloud_name: "dgm92vwvw",
  api_key:"421987822545236",
  api_secret:"FIs8MGqMUBxCuOYdPVz0F59KAxI"
});

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
    upload.single("image")(req as any, res as any, async (err: any) => {
      if(err) {
        console.error(err);
        return res.status(500).json(
          {error: "Image upload failed"});
      }

      const { description } = req.body;
      const file = (req as any).file;
      const { path } = file;

      try {
        const result = await cloudinary.uploader.upload(path);
        const image = await prisma!.art.create({
          data: {
            description,
            imageUrl: result.secure_url,
          },
        });

        return res.status(201).json(image);
      } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Image upload failed"});
      }
    });
  } else {
    res.status(405).json({error: "Method not allowed" });
  }
}