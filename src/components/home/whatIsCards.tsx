import { mainPageData } from "@/lib/mainPageData";

export default function WhatIsCards() {
    return (
        <div className="md:mt-10 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 h-max px-6">
            {
                mainPageData.map((item, index) => <div key={index} className="flex flex-col justify-start items-start bg-neutral-950/30 border border-neutral-400/20 rounded-2xl p-6 relative w-fit sm:w-96 overflow-clip">
                    <img src="dots.svg" alt="Key Value icon" className="absolute w-full h-full object-cover inset-0 z-0 opacity-[7%]" />
                    <img src={item.imageLink} alt="Card Icon" className="size-8 sm:size-10" />
                    <div className="absolute inset-0 w-full hull bg-gradient-to-t from-black to-transparent"></div>

                    <p className="text-2xl sm:text-3xl font-medium text-white drop-shadow-xl mt-4">{item.title}</p>
                    <p className="text-sx font-light text-neutral-400 drop-shadow-xl mt-8 sm:mt-6 leading-7 sm:leading-normal">{item.desc}</p>
                </div>)
            }
        </div>
    );
};
