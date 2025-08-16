import { MdContentCopy } from "react-icons/md";

interface TerminalPart {
    text: string;
    color?: string;
}

interface TerminalLine {
    parts: TerminalPart[];
    className?: string;
}

export interface CodeSnippetProps {
    title: string;
    lines: TerminalLine[];
}

const CodeSnippet = (props: CodeSnippetProps) => {
    return (
        <div className="min-w-[40%] max-w-full w-fit h-auto px-1 pt-2 pb-1 bg-neutral-900 flex flex-col justify-start items-center rounded-t-lg rounded-b-md">

            {/* Header */}
            <div className="w-full text-neutral-400 flex justify-between items-center px-2 mb-2 rounded-t-3xl min-w-0">
                <p className="text-md truncate min-w-0 flex-1 mr-2">{props.title}</p>
                <MdContentCopy className="flex-shrink-0 cursor-pointer hover:text-neutral-200 transition-colors" />
            </div>

            {/* Body */}
            <div className="w-full flex flex-col gap-2 justify-start bg-black rounded-md px-3 py-4 font-mono overflow-x-auto max-w-full">
                {props.lines.map((line, i) => (
                    <p key={i} className={`${line.className || ""} whitespace-pre-wrap break-words min-w-0`}>
                        {line.parts?.map((part, j) => (
                            <span key={j} className={`${part.color || ""} whitespace-pre-wrap break-words`}>
                                {part.text}
                            </span>
                        ))}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CodeSnippet;