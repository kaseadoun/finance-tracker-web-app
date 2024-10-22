import Button from "../components/Button/Button";

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
                    <Button content="Get started"/>
                </div>
            </section>
            <section className="h-96">

            </section>
            <section className="h-96 bg-white">

            </section>
            <section className="h-96">

            </section>
            <section className="h-96 bg-white">

            </section>
            <section className="h-96">

            </section>
        </>
    );
}

export default Home;