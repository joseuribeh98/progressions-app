import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <h1>Bienvenido a la aplicación Scout</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/tasks" >
                            Ver Tareas
                        </Link>
                    </li>
                    <li>
                    <Link href="/member" >
                            Ver Miembros
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}