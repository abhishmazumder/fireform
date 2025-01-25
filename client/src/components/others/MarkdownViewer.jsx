import React, { useMemo } from 'react'
import Markdown from "react-markdown";

const markdownH1 = ({ children }) => {
    return <h1 className="text-3xl font-bold">{children}</h1>;
};

const markdownH2 = ({ children }) => {
    return <h1 className="text-xl font-bold">{children}</h1>;
};

const markdownParagraph = ({ children }) => {
    return <p className="text-md">{children}</p>;
};

const markdownAnchor = ({ children, href }) => {
    return (
        <a
            className="text-primary hover:underline transition-all"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

const markdownUl = ({ children }) => {
    return <ul className="list-disc list-inside">{children}</ul>;
};

const markdownLi = ({ children }) => {
    return <li className="mb-2">{children}</li>;
};

const MarkdownViewer = ({ data }) => {
    const components = useMemo(
        () => ({
            h1: markdownH1,
            h2: markdownH2,
            p: markdownParagraph,
            a: markdownAnchor,
            ul: markdownUl,
            li: markdownLi,
        }),
        []
    );

    return (
        <div className="text-white flex flex-col gap-y-6">
            <Markdown components={components}>{data}</Markdown>
        </div>
    )
}

export default MarkdownViewer