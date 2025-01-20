import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        const products = await prisma.product.findMany();
        res.status(200).json(products);
        break;

      case "POST":
        const {
          slug,
          name,
          visibility,
          compare,
          price,
          pricePromotion,
          description,
          imageURL,
          idStore,
          idCollection,
        } = req.body;

        if (!slug || !name || !price || !imageURL || !idStore) {
          return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        const newProduct = await prisma.product.create({
          data: {
            slug,
            name,
            visibility: visibility ?? true,
            compare: compare ?? false,
            price,
            pricePromotion,
            description,
            imageURL,
            idStore,
            idCollection,
          },
        });
        res.status(201).json(newProduct);
        break;

      case "PUT":
        const { id } = req.query;
        const updateData = req.body;

        if (!id || typeof id !== "string") {
          return res.status(400).json({ error: "ID do produto inválido" });
        }

        const updatedProduct = await prisma.product.update({
          where: { id: parseInt(id) },
          data: updateData,
        });

        res.status(200).json(updatedProduct);
        break;

      case "DELETE":
        const { id: deleteId } = req.query;

        if (!deleteId || typeof deleteId !== "string") {
          return res.status(400).json({ error: "ID do produto inválido" });
        }

        await prisma.product.delete({
          where: { id: parseInt(deleteId) },
        });

        res.status(204).end();
        break;

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}
