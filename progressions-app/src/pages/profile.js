import { useSession } from 'next-auth/client'

export default function Profile() {
  const [session, loading] = useSession()

  if (loading) {
    return null
  }

  if (!session) {
    return <p>Por favor, inicia sesión para ver tu perfil.</p>
  }

  // Aquí es donde iría tu lógica para mostrar y actualizar el perfil del usuario.

  return <p>Aquí iría el perfil de {session.user.name}</p>
}
