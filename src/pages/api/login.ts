import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }

    try {
      const user = await prisma.usuario.findUnique({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: "Usuário não encontrado." });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({ error: "Senha incorreta." });
      }

      return res.status(200).json({ message: "Login realizado com sucesso!", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro no servidor." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
