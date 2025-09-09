-- CreateTable
CREATE TABLE "public"."contacts" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "deleted_at" TIMESTAMP(6),
    "phone_number" VARCHAR(15),
    "email" VARCHAR(255),
    "linked_id" INTEGER,
    "link_precedence" VARCHAR(255) NOT NULL DEFAULT 'secondary',

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_phone_number_key" ON "public"."contacts"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "public"."contacts"("email");
