import { Link } from "react-router-dom";

function Home({ title }: { title: string }) {
    return (
        <>
            <section className="h-screen flex items-center justify-center bg-gradient-rainy-grey-to-white">
                <div>
                    <img src="src\assets\rainy-day-logo.png" className="max-w-xs" alt="RainyDay finance web app logo"/>
                </div>
                <div className="space-y-4 > * + *">
                    <h1>{title}</h1>
                    <p>Know that all of your bills are paid and you still have enough for an emergency.</p>
                    <Link to="/signup"><button>Get Started</button></Link>
                </div>
            </section>
            
        </>
    );
}

export default Home;