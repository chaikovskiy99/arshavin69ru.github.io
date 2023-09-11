import NextAuth from "next-auth/next";
import { authOptions } from "./options";


//export const dynamic = "force-dynamic" // fixes `dynamic = "error"` couldn't be rendered statically because it used `nextUrl.searchParams`.
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
