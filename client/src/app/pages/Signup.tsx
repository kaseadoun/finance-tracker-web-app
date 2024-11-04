import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return(
        <>
            <h1>Sign Up</h1>
            <div className="flex flex-col max-w-md h-3/6 p-5 gap-5">
                <form className="flex flex-col h-3/6 p-5 gap-5">
                    <input 
                        value={firstName}
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                        value={lastName}
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
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
                        <button>Sign Up</button>
                        <button><Link to="/">Cancel</Link></button>
                    </div>
                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
        </>
    );
}