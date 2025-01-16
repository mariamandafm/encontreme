-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "category" TEXT NOT NULL,
    "nameAccess" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "visibility" BOOLEAN NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idTemplate" INTEGER,
    CONSTRAINT "Store_idTemplate_fkey" FOREIGN KEY ("idTemplate") REFERENCES "Template" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Store_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Template" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idTemplate" INTEGER NOT NULL,
    CONSTRAINT "Page_idTemplate_fkey" FOREIGN KEY ("idTemplate") REFERENCES "Template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Section" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chave" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "visibilidade" BOOLEAN NOT NULL,
    "idPage" INTEGER NOT NULL,
    CONSTRAINT "Section_idPage_fkey" FOREIGN KEY ("idPage") REFERENCES "Page" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "totalProducts" INTEGER NOT NULL,
    "visibility" BOOLEAN NOT NULL,
    "idStore" INTEGER NOT NULL,
    CONSTRAINT "Collection_idStore_fkey" FOREIGN KEY ("idStore") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "visibility" BOOLEAN NOT NULL,
    "compare" BOOLEAN NOT NULL,
    "price" REAL NOT NULL,
    "pricePromotion" REAL,
    "description" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "idStore" INTEGER NOT NULL,
    "idCollection" INTEGER,
    CONSTRAINT "Product_idCollection_fkey" FOREIGN KEY ("idCollection") REFERENCES "Collection" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_idStore_fkey" FOREIGN KEY ("idStore") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
