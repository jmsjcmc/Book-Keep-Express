import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

config({
    path: ".env"
});

const sql = neon(process.env.Db_Url!);
export const db = drizzle({ client: sql });