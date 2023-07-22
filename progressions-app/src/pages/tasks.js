import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function Tasks() {
  const { data: session, status } = useSession()
  const loading = status === "loading";
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (!session) {
      return
    }

    fetch(`/api/tasks?userId=${session.user.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener las tareas')
        }

        return response.json()
      })
      .then(data => {
        setTasks(data)
      })
      .catch(error => {
        console.error('Error al obtener las tareas:', error)
      })
  }, [session])

  if (loading) {
    return null
  }

  if (!session) {
    return <p>Por favor, inicia sesión para ver tus tareas.</p>
  }

  return (
    <div>
      <h1>Tareas de {session.user.name}</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}
