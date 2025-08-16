import DocsSideBar from "@/components/docs/DocsSideBar";
import { onest } from "@/lib/fonts";


export default function DocsLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`min-h-screen w-full px-6 bg-black flex flex-col overflow-hidden custom-scrollbar rounded-md relative pt-[100px] ${onest.className}`}
        >
            <div className="flex flex-col lg:flex-row justify-start items-start gap-8 w-full">
                <DocsSideBar />
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>

    );
};
