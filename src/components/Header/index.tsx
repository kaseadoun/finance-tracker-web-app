// import styles from "./header.module.css";

interface HeaderProps {
    setPage: (page: number) => void;
}

function Header({ setPage }: HeaderProps) {
    return(
        <header className="bg-gray-800">
            <nav>
                <ul>
                    <li><a onClick={() => setPage(0)} className="text-3xl font-bold underline">Home</a></li>
                    <li><a onClick={() => setPage(1)}>About</a></li>
                </ul>
                <ul>
                    <li><a onClick={() => setPage(2)}>Login</a></li>
                    <li><a onClick={() => setPage(3)}>Sign Up</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;