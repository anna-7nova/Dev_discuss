import NextAuth from "next-auth"; /didnt show router
import GitHub from "../node_modules/@auth/core/providers/github"; //didnt show router
import { PrismaAdapter } from "../node_modules/@auth/prisma-adapter/index";
import { db } from "../src/db";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID; //need to read documentation to understand principle
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET; //need to read documentation to understand principle

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    throw new Error("Missing github credentials!")
}

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({ //need to read documentation to understand principle
    adapter: PrismaAdapter(db),
    providers: [
        GitHub({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
        })
    ],
    callback: {
        async session({ session, user }: any) {
            if (session && user) {
                session.user.id = user.id;
            }
            return session;
        }
    }
})