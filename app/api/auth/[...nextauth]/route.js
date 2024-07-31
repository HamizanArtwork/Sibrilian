import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";
import Dashboard from "../../../admin/page";
import { SessionProvider } from "next-auth/react";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn ({user}) {
       const emailAccess = "timliterasi@sman1sragen.sch.id";
       if (user.email === emailAccess) {
        return true;
       } else {
        return('/error');
       }
    },
  
  },
};

const handler = NextAuth(authOptions);

export{handler as GET, handler as POST};