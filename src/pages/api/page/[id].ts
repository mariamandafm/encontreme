// filepath: /home/amanda/code/encontreme/src/pages/api/page/[id].ts
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const page = await prisma.page.findUnique({
        where: { id: Number(id) },
        include: {
          sections: true,
        },
      });

      if (!page) {
        return res.status(404).json({ error: 'Página não encontrada.' });
      }

      res.status(200).json(page);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar página.' + error });
    }
  } else if (req.method === 'PUT') {
    const {
      title,
      logo,
      icon,
      bannerImage,
      bannerTitle,
      presentationImage,
      presentationDescription,
      idCollection,
      productsTitle,
      facebookLink,
      instagramLink,
      youtubeLink,
      address,
      contact,
      sections,
    } = req.body;

    try {
      const updatedPage = await prisma.page.update({
        where: { id: Number(id) },
        data: {
          title,
          logo,
          icon,
          bannerImage,
          bannerTitle,
          presentationImage,
          presentationDescription,
          idCollection,
          productsTitle,
          facebookLink,
          instagramLink,
          youtubeLink,
          address,
          contact,
          sections: {
            deleteMany: {},
            create: sections.map((section: { chave: string, titulo: string, visibilidade: boolean }) => ({
              chave: section.chave,
              titulo: section.titulo,
              visibilidade: section.visibilidade,
            })),
          },
        },
        include: {
          sections: true,
        },
      });

      res.status(200).json(updatedPage);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar página.' + error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).json({ error: `Método ${req.method} não permitido.` });
  }
}