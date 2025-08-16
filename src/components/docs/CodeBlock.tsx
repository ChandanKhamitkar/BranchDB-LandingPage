interface CodeBlockProps {
    num?: string;
    step?: string;
    code: string | string[];
}

export default function CodeBlock({
    num,
    step,
    code,
}: CodeBlockProps) {
    return (
        <>
            <p className="text-md text-white font-semibold my-4">
                <span className="font-normal">{num && num + '.'}</span> {step}
            </p>
            <div className={`font-mono bg-neutral-900 text-[#fe6a00] p-4 rounded-md text-sm overflow-x-auto ${num ? "sm:ml-8" : ""} max-w-full`}>
                {
                    Array.isArray(code) ? 
                    <div className="flex flex-col gap-2 justify-start min-w-0">
                        {
                            code.map((item, index) => (
                                <p key={index} className="break-all whitespace-pre-wrap min-w-0">
                                    {item}
                                </p>
                            ))
                        }
                    </div> : 
                    <p className="break-all whitespace-pre-wrap min-w-0">{code}</p>
                }
            </div>
        </>
    );
}