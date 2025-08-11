import { pgTable, uuid, varchar} from 'drizzle-orm/pg-core';
export const usersTable = pgTable("users_table", {
    id: uuid('id').primaryKey().defaultRandom(),
    firstName: varchar('first_name', { length: 50}).notNull(),
    lastName: varchar('last_name' , { length: 50}).notNull(),
    username: varchar('username', { length: 10}).notNull().unique(),
    password: varchar('password', { length: 255}).notNull()
});

export type InsertUser =  typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;