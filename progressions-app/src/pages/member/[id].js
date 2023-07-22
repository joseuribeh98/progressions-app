import { useRouter } from 'next/router'

export default function Member() {
  const router = useRouter()
  const { id } = router.query

  return <p>Perfil del miembro: {id}</p>
}
