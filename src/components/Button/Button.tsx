interface ButtonContent {
    content: string;
}

export default function Button({ content }: ButtonContent) {
    return(
        <button>
            { content }
        </button>
    );
}