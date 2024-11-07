import { Link } from "react-router-dom";
import placeholder from "../../../public/placeholder-image.webp";

interface ContentItemType {
    title: string;
    content: string;
    image: string;
}

function ContentItem({title, content, image}: ContentItemType) {
    return (
        <div className="flex flex-col gap-3 items-center">
            <img src={ image } className="max-h-xs max-w-xs"></img>
            <h3>{ title }</h3>
            <p>{ content }</p>
        </div>
    );
}

export default function Home({ title }: { title: string }) {
    return (
        <>
            <section className="h-screen flex items-center justify-center bg-gradient-rainy-grey-to-white dark-readability">
                <div>
                    <img src="src\assets\rainy-day-logo.png" className="max-w-xs" alt="RainyDay finance web app logo" />
                </div>
                <div className="space-y-4 > *">
                    <h1>{title}</h1>
                    <p>Know all of your bills are paid and you still have enough for an emergency.</p>
                    <div>
                        <Link to="/signup">
                            <button>Get Started</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center flex-col my-48">
                <h2>Lorem ipsum dolor sit amet conse</h2>
                <div className="flex items-center justify-center gap-48 my-10">
                    <ContentItem 
                        title="Lorem Ipsum"
                        content="Lorem ipsum dolor sit amet conse"
                        image={ placeholder }
                    />
                    <ContentItem 
                        title="Lorem Ipsum"
                        content="Lorem ipsum dolor sit amet conse"
                        image={ placeholder }
                    />
                    <ContentItem 
                        title="Lorem Ipsum"
                        content="Lorem ipsum dolor sit amet conse"
                        image={ placeholder }
                    />
                </div>
            </section>
            <section className="flex items-center justify-center my-10 px-80 ">
                <div>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, consectetur? Nulla officiis nihil deleniti neque. Quo ducimus eaque blanditiis reprehenderit ea molestias id perspiciatis incidunt voluptate fugit! Dolorum, in ab.</p>
                </div>
                <img src={placeholder} alt="Placeholder image" className="bg-contain max-w-sm m-h-sm"></img>
            </section>
        </>
    );
}