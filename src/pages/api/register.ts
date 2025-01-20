import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }

    try {
      const userExists = await prisma.usuario.findUnique({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: "E-mail já cadastrado." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.usuario.create({
        data: {
          name,
          email,
          password: hashedPassword,
          stores: {
            create: {
              name: "Loja Padrão",
              category: "Padrão",
              nameAccess: "default",
              contact: "+55 12345-6789",
              visibility: true,
            },
          }
        },
      });

      return res.status(201).json({ message: "Usuário criado com sucesso!", user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro no servidor." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
