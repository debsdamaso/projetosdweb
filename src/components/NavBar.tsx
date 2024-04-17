import Link from "next/link";

interface NavBarProps {
    active: "usuario" | "medicamentos" | "funcionarios";
}

export function NavBar(props: NavBarProps){
    const active = props.active;
    const classActive = "border-b-2 border-red-600 pb-1";

    return(
        <nav className="flex justify-between items-center px-8 py-4 bg-transparent w-full">
            <h1 className="text-4xl font-bold">SafeDose</h1>
            <ul className="flex gap-16">
                <li className={active === 'usuario' ? classActive : ""}>
                    <Link href="/usuario">Usuário</Link>
                </li>
                <li className={active === 'medicamentos' ? classActive : ""}>
                    <Link href="/medicamentos">Medicamentos</Link>
                </li>
                <li className={active === 'funcionarios' ? classActive : ""}>
                    <Link href="/funcionarios">Funcionários</Link>
                </li>
            </ul>
            <div className="flex items-center bg-white rounded-full px-2 py-2">
                <input type="text" placeholder="Pesquisar" className="outline-none bg-transparent" />
                {/* adicionar um ícone de pesquisar */}
            </div>
        </nav>
    )
}















