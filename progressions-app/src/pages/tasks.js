import { useSession, getSession } from 'next-auth/react'
import Header from "@/components/Header";
import { TaskList } from "@/components/TaskList";

export default function Tasks() {
    const [session, loading] = useSession()

    if (loading) {
        return null
    }

    if (!loading && !session) {
        return <p>Esta página es solo para usuarios autenticados. Por favor, inicia sesión.</p>
    }

    return (
        <div>
            <Header />
            <h1>Tasks</h1>
            <TaskList />
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    return {
        props: { session },
    }
}
