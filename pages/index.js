import Link from "../src/components/link";
import React from "react";

function Title ( {Children} ) {
    return (
        <React.Fragment>
            <h1>
                {Children}
            </h1>
            <style jsx>{`
                h1 {
                    color: red;
                }
            `}</style>
        </React.Fragment>
    );
}

export default function HomePage () {
    return (
        <div>
            <Title as="h1">Alura Cases - Home</Title>
            <Link href="/faq">
                Ir para a página do FAQ
            </Link>

        </div>
    )
}