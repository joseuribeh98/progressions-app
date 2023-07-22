import NextAuth from 'next-auth'
import jwt from 'jsonwebtoken'

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })
        const user = await res.json()

        if (user.jwt) {
          return { ...user.user, jwt: user.jwt }
        } else {
          throw new Error('No se pudo iniciar sesión')
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token = { ...token, jwt: user.jwt }
      }
      return token
    },
    async session(session, token) {
      session.jwt = token.jwt
      return session
    },
  },
})
