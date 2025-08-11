CREATE TABLE "users_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
