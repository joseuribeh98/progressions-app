import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <button onClick={() => signIn('credentials')}>Iniciar sesión</button>
    </div>
  )
}