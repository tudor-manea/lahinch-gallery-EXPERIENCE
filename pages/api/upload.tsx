import { v2 as cloudinary } from "cloudinary";
import prisma from "@/lib/prisma";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

cloudinary.config({
  cloud_name: "dgm92vwvw",
  api_key: "421987822545236",
  api_secret: "FIs8MGqMUBxCuOYdPVz0F59KAxI",
});

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(upload.single("image"));

handler.post(async (req: NextApiRequest & { file: Express.Multer.File }, res: NextApiResponse) => {
  const { description } = req.body;
  const { path } = req.file;

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
    return res.status(500).json({ error: "Image upload failed" });
  }
});

handler.use((req: NextApiRequest, res: NextApiResponse) => {
  res.status(405).json({ error: "Method not allowed" });
});

export default handler;
