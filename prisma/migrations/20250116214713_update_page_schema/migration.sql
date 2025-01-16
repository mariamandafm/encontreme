-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idTemplate" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "logo" TEXT,
    "icon" TEXT,
    "bannerImage" TEXT,
    "bannerTitle" TEXT,
    "presentationImage" TEXT,
    "presentationDescription" TEXT,
    "idCollection" INTEGER,
    "productsTitle" TEXT,
    "facebookLink" TEXT,
    "instagramLink" TEXT,
    "youtubeLink" TEXT,
    "address" TEXT,
    "contact" TEXT,
    CONSTRAINT "Page_idTemplate_fkey" FOREIGN KEY ("idTemplate") REFERENCES "Template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Page_idCollection_fkey" FOREIGN KEY ("idCollection") REFERENCES "Collection" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Page" ("id", "idTemplate", "title") SELECT "id", "idTemplate", "title" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE UNIQUE INDEX "Page_idCollection_key" ON "Page"("idCollection");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
