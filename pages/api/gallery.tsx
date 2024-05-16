import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  try {
    const images = await prisma!.art.findMany()
    res.status(200).json(images)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: "Failed to fetch images"})
  }
}

