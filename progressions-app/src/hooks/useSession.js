import { useSession } from 'next-auth/client'

export default function Component() {
  const [session, loading] = useSession()

  if (loading) {
    return null
  }

  if (session) {
    return <p>Bienvenido, {session.user.email}</p>
  } else {
    return <p>No has iniciado sesión</p>
  }
}
