import { IoLogoGithub } from "react-icons/io5";

export default function SupportUs() {
    return (
        <div className="py-16 sm:py-40 w-full flex flex-col justify-center items-center px-6">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-100 font-medium mx-auto w-fit mb-6 text-center">
                Blown away? Give us a boost!
            </p>

            <a
                href="https://github.com/ChandanKhamitkar/BranchDB"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex w-fit h-fit overflow-hidden rounded-xl p-[1.5px] mt-6 cursor-pointer"
            >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#ff7f00_16%,#ffff00_33%,#00ff00_50%,#0000ff_66%,#8b00ff_83%,#ff0000_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-black px-12 py-4 text-lg font-medium text-white backdrop-blur-xl">
                    GitHub
                    <IoLogoGithub className="size-8 ml-4" />
                </span>
            </a>
        </div>
    );
};
