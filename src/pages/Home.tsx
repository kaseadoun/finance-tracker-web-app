function Home({ title }: { title: string }) {
    return (
        <>
            <section className="h-full flex items-center justify-center">
                <div>
                    <img src="src\assets\rainy-day-logo.png" />
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
            </section>
            <section>

            </section>
        </>
    );
}

export default Home;