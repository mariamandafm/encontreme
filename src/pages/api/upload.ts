import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const saveFile = async (file: File) => {
  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, file.originalFilename || "uploaded_file");
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(filePath, data);
  fs.unlinkSync(file.filepath); 

  return `/uploads/${file.originalFilename}`;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const form = formidable({ multiples: false });

    const [, files] = await form.parse(req);

    const file = Array.isArray(files.image) ? files.image[0] : files.image;

    if (!file) {
      return res.status(400).json({ error: "Nenhum arquivo enviado" });
    }

    const filePath = await saveFile(file);
    return res.status(200).json({ imageUrl: filePath });
  } catch (error) {
    console.error("Erro no upload:", error);
    return res.status(500).json({ error: "Erro no servidor durante o upload" });
  }
}
