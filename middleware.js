import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const usuario = req.nextauth.token.usuario;
    console.log(usuario.rol)
    console.log(req.nextUrl.pathname)
    if (
      req.nextUrl.pathname === "/dashboard/usuarios" &&
      usuario.rol !== 'SUPER-ADMIN'
    ) {
      
      return NextResponse.redirect(new URL('/', req.url));
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = { matcher: ["/dashboard", "/dashboard/:path*"] };