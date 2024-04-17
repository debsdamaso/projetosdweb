import Link from "next/link";

interface NavBarProps {
    active: "usuario" | "medicamentos" | "funcionarios";
}

export function NavBar(props: NavBarProps){
    const active = props.active;

    return (
        <nav className="flex justify-between items-center px-8 py-6 bg-transparent w-full">
            <h1 className="text-4xl font-bold">SafeDose</h1>
            <ul className="flex gap-16 items-center">
                <li className={active === 'usuario' ? "flex items-center space-x-2" : "flex items-center"}>
                    {active === 'usuario' && <span className="text-red-500 font-bold">+</span>}
                    <Link href="/usuario">usuario</Link>
                </li>
                <li className={active === 'medicamentos' ? "flex items-center space-x-2" : "flex items-center"}>
                    {active === 'medicamentos' && <span className="text-red-500 font-bold">+</span>}
                    <Link href="/medicamentos">medicamentos</Link>
                </li>
                <li className={active === 'funcionarios' ? "flex items-center space-x-2" : "flex items-center"}>
                    {active === 'funcionarios' && <span className="text-red-500 font-bold">+</span>}
                    <Link href="/funcionarios">funcionários</Link>
                </li>
            </ul>
            <div className="flex items-center bg-white rounded-full px-2 py-2">
                <input type="text" placeholder="Pesquisar" className="outline-none bg-transparent" />
                {/* ícone de pesquisar */}
            </div>
        </nav>
    );
}

export default NavBar;














