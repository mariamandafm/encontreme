import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET": {
        const products = await prisma.product.findMany({
          include: { store: true }, 
        });
        return res.status(200).json(products);
      }

      case "POST": {
        console.log(req.body);
        if (!req.body || typeof req.body !== "object") {
          return res.status(400).json({ error: "Dados inválidos na requisição." });
        }

        const {
          slug,
          name,
          visibility,
          compare,
          price,
          pricePromotion,
          description,
          imageURL,
          idUser, 
          idCollection,
        } = req.body;

        if (!idUser) {
          return res.status(400).json({ error: "ID do usuário é obrigatório." });
        }

        const store = await prisma.store.findFirst({
          where: { idUser: Number(idUser) },
        });

        if (!store) {
          return res.status(404).json({ error: "Nenhuma loja encontrada para este usuário." });
        }

        const newProduct = await prisma.product.create({
          data: {
            slug,
            name,
            visibility: Boolean(visibility),
            compare: Boolean(compare),
            price: parseFloat(price),
            pricePromotion: pricePromotion ? parseFloat(pricePromotion) : null,
            description,
            imageURL,
            idStore: store.id,
            idCollection: idCollection ? Number(idCollection) : null,
          },
        });

        return res.status(201).json(newProduct);
      }

      case "PUT": {
        const { id } = req.query;
        if (!id || isNaN(Number(id))) {
          return res.status(400).json({ error: "ID do produto inválido" });
        }

        const updateData = req.body;

        const updatedProduct = await prisma.product.update({
          where: { id: Number(id) },
          data: updateData,
        });

        return res.status(200).json(updatedProduct);
      }

      case "DELETE": {
        const { id: deleteId } = req.query;

        if (!deleteId || isNaN(Number(deleteId))) {
          return res.status(400).json({ error: "ID do produto inválido" });
        }

        await prisma.product.delete({
          where: { id: Number(deleteId) },
        });

        return res.status(204).end();
      }

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch (error) {
    console.error("Erro interno do servidor:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
