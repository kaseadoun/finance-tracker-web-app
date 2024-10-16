function Home({ title }: { title: string }) {
    return (
        <>
            <section className="h-90vh">
                <h1>{title}</h1>
            </section>
        </>
    );
}

export default Home;