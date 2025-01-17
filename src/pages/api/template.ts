import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const templates = await prisma.template.findMany({
        include: {
          pages: {
            include: {
              sections: true,
            },
          },
        },
      });
      res.status(200).json(templates);
    } catch {
      res.status(500).json({ error: "Erro ao buscar templates." });
    }
  } else if (req.method === "POST") {
    const { name, type, pages } = req.body;

    if (!name || !type) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    try {
      const newTemplate = await prisma.template.create({
        data: {
          name,
          type,
          pages: {
            create: pages.map((page: {
              title: string,
              logo?: string,
              icon?: string,
              bannerImage?: string,
              bannerTitle?: string,
              presentationImage?: string,
              presentationDescription?: string,
              idCollection?: number,
              productsTitle?: string,
              facebookLink?: string,
              instagramLink?: string,
              youtubeLink?: string,
              address?: string,
              contact?: string,
              sections: { chave: string, titulo: string, visibilidade: boolean }[]
            }) => ({
              title: page.title,
              logo: page.logo,
              icon: page.icon,
              bannerImage: page.bannerImage,
              bannerTitle: page.bannerTitle,
              presentationImage: page.presentationImage,
              presentationDescription: page.presentationDescription,
              idCollection: page.idCollection || null,
              productsTitle: page.productsTitle,
              facebookLink: page.facebookLink,
              instagramLink: page.instagramLink,
              youtubeLink: page.youtubeLink,
              address: page.address,
              contact: page.contact,
              sections: {
                create: page.sections.map((section) => ({
                  chave: section.chave,
                  titulo: section.titulo,
                  visibilidade: section.visibilidade,
                })),
              },
            })),
          },
        },
        include: {
          pages: {
            include: {
              sections: true,
            },
          },
        },
      });
      res.status(201).json(newTemplate);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar template." + error });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ error: `Método ${req.method} não permitido.` });
  }
}
