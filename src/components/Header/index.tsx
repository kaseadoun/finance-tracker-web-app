interface HeaderProps {
    setPage: (page: number) => void;
}

function Header({ setPage }: HeaderProps) {
    return(
        <header>
            <nav>
                <ul>
                    <li><a onClick={() => setPage(0)}>Home</a></li>
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