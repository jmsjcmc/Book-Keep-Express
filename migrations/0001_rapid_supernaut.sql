ALTER TABLE "users_table" RENAME COLUMN "email" TO "username";--> statement-breakpoint
ALTER TABLE "users_table" DROP CONSTRAINT "users_table_email_unique";--> statement-breakpoint
ALTER TABLE "users_table" ADD CONSTRAINT "users_table_username_unique" UNIQUE("username");