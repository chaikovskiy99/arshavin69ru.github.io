import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign In",

      credentials: {
        email: { label: "email", placeholder: "email", type: "text" },
        password: {
          label: "password",
          placeholder: "password",
          type: "password",
        },
      },
      authorize(credentials, req) {
        return { id: "1", email: "boba@gmail.com" };
      },
      
    }),
    
  ]
};
