'use client';
import { onest } from "@/lib/fonts";
import { MdContentCopy } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { copyToClipBoard } from "@/utils/copyToClipBoard"; import { sdkCardData } from "@/lib/sdk/SDKData";

export default function Page() {
    const [copied, setCopied] = useState<boolean>(false);
    const installCmd = "npm i branchdb-client";

    const handleCopy = () =>
        copyToClipBoard({
            text: installCmd,
            fun: () => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            },
        });
    return (
        <div className={`w-full bg-black flex flex-col overflow-x-hidden rounded-md relative pt-[130px] ${onest.className} pb-8 custom-scrollbar px-4`}>

            <img src="js-sdk-hero-card.png" alt="Javascript SDK hero card" className="w-[90%] md:w-3/4 rounded-2xl mx-auto" />

            <div className="w-fit mx-auto flex justify-center items-center gap-10 mt-6 bg-neutral-100/10 backdrop-blur-2xl rounded-md text-md md px-4 py-3 font-mono transition-all duration-300">
                <span >npm i branchdb-client</span>
                {copied ? (
                    <IoCheckmarkDone
                        aria-label="Copied"
                        className="text-green-600 text-lg"
                    />
                ) : (
                    <MdContentCopy
                        aria-label="Copy command"
                        onClick={handleCopy}
                        className="text-neutral-500 cursor-pointer hover:text-neutral-50 text-lg"
                    />
                )}
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center mt-12 h-max gap-8">
                {
                    sdkCardData.map((item, index) => <div key={index} className="bg-white/5 flex flex-col justify-center items-start rounded-2xl border border-white/10 w-[90%] sm:w-96 overflow-clip h-full hover:border-jsyellow/60">
                        <img src={item.imageLink} alt="Integration Crad Img" className="w-full object-cover" />
                        <div className="bg-black px-5 py-6 w-full h-full">
                            <p className="text-lg ms:text-xl text-white font-medium">{item.title}</p>
                            <p className="text-neutral-500 text-wrap text-md mt-2">{item.desc}</p>
                        </div>
                    </div>)
                }
            </div>

            {/* Github Repo Promotion */}
            <div className="flex flex-col justify-center items-center mx-auto mt-12 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">
                    Want to Unleash Full Power?
                </p>
                <p className="text-sm sm:text-md font-base text-neutral-400 mt-4">
                    Clone the source code. You&apos;re the architect—build it, run it, be in charge.
                </p>
                <a
                    href="https://github.com/ChandanKhamitkar/BranchDB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex h-fit overflow-hidden rounded-xl p-[3px] mt-6 cursor-pointer"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#ff7f00_16%,#ffff00_33%,#00ff00_50%,#0000ff_66%,#8b00ff_83%,#ff0000_100%)]" />

                    <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-white/90 px-6 py-4 text-lg font-medium text-gray-900 backdrop-blur-xl">
                        Download Source Code
                        <IoLogoGithub className="text-gray-900 size-9 ml-4" />
                    </span>
                </a>
            </div>
        </div>
    );
};
