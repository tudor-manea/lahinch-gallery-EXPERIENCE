import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password, name, username } = req.body;

    try {
      const user = await prisma!.user.create({
        data: {
          name,
          email,
          password,
          username,
        },
      });

      res.status(201).json({ message: "User Created Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error Creating User" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
