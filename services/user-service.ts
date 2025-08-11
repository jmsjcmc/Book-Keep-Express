import { eq } from "drizzle-orm";
import { db } from "../db/drizzle";
import { usersTable } from "../db/schema";
import { UserRequest, UserResponse } from "../interfaces/users";
import bcrypt from "bcrypt";

export class UserService {
    async createUser(data: UserRequest) : Promise<UserResponse> {
        const hashed = await bcrypt.hash(data.password, 10);
        const [newUser] = await db
        .insert(usersTable)
        .values({
            ...data, password: hashed
        }).returning();
        return newUser;
    }

    async getUsers() : Promise<UserResponse[]> {
        return await db.select().from(usersTable);
    }

    async getUser(id: string) : Promise<UserResponse | undefined> {
        const [user] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, id));
        return user;
    }

    async updateUser(id: string, data: UserRequest) : Promise<UserResponse | undefined> {
        let updateData = {
            ...data
        };

        if (data.password){
            updateData.password = await bcrypt.hash(data.password, 10);
        }
        
        const [user] = await db
        .update(usersTable)
        .set(updateData)
        .where(eq(usersTable.id, id))
        .returning();
        return user;
    }

    async deleteUser(id: string) : Promise<void> {
       await db.delete(usersTable).where(eq(usersTable.id, id));
    }
}