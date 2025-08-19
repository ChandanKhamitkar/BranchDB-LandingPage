import { nextFeaturesList } from "@/lib/mainPageData";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";

export default function NextFeatures() {
    return (
        <div className="pb-10 sm:pb-20 pt-20 md:pt-40 w-full flex flex-col justify-center items-center px-4 sm:px-6">
            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="text-4xl md:text-7xl text-neutral-100 font-medium text-center mx-auto w-fit">
                Future Drop 🚀
            </p>

            <div className="flex flex-col w-full max-w-3xl mt-12 space-y-6">
                {nextFeaturesList.map((item, index) => (
                    <div
                        data-aos="fade-up" data-aos-duration="600" data-aos-delay="100"  
                        key={index} className="w-full">
                        <div className="flex space-x-4 items-start">
                            <RiCheckboxIndeterminateLine className="text-neutral-400 text-2xl mt-1" />
                            <div className="flex flex-col">
                                <p className="text-lg md:text-xl font-semibold text-neutral-300">
                                    {item.title}
                                </p>
                                <p className="text-sm md:text-base text-neutral-400">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-neutral-800 mt-6"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
