import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "ID inválido" });
  }

  try {
    switch (req.method) {
      case "GET": {
        const product = await prisma.product.findUnique({
          where: { id: Number(id) },
        });

        if (!product) {
          return res.status(404).json({ error: "Produto não encontrado" });
        }

        return res.status(200).json(product);
      }

      case "PUT": {
        const {
          name,
          visibility,
          compare,
          price,
          pricePromotion,
          description,
          imageURL,
          idCollection,
        } = req.body;

        const updatedProduct = await prisma.product.update({
          where: { id: Number(id) },
          data: {
            name,
            visibility,
            compare,
            price: parseFloat(price),
            pricePromotion: pricePromotion ? parseFloat(pricePromotion) : null,
            description,
            imageURL,
            idCollection: idCollection ? parseInt(idCollection) : null,
          },
        });

        return res.status(200).json(updatedProduct);
      }

      case "DELETE": {
        await prisma.product.delete({
          where: { id: Number(id) },
        });

        return res.status(204).end();
      }

      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch (error) {
    console.error("Erro interno do servidor:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
