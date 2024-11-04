import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        return;
    }

    return (
        <>
            <h1>Login</h1>
            <div className="flex flex-col max-w-md h-3/6 p-5 gap-5">
                <form className="flex flex-col h-3/6 p-5 gap-5">
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex">
                        <button>Login</button>
                        <button><Link to="/">Cancel</Link></button>
                    </div>
                </form>
                <p><Link to="/signup">Don't have an account? Sign up!</Link></p>
            </div>
        </>
    );
}

export default Login;