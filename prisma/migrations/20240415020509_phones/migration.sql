/*
  Warnings:

  - You are about to drop the column `email` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emails]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phones]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Customer_email_key";

-- DropIndex
DROP INDEX "Customer_phone_key";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "email",
DROP COLUMN "phone",
ADD COLUMN     "emails" TEXT[],
ADD COLUMN     "phones" TEXT[];

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "email",
DROP COLUMN "phone",
ADD COLUMN     "emails" TEXT[],
ADD COLUMN     "phones" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Customer_emails_key" ON "Customer"("emails");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phones_key" ON "Customer"("phones");
