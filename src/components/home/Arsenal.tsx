import { arsenalData } from "@/lib/mainPageData";

export default function Arsenal() {
    return (
        <div className="pb-20 pt-20 md:pt-40 w-full flex flex-col justify-center items-center px-4 sm:px-6">
            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="text-4xl md:text-7xl text-neutral-100 font-medium text-center mx-auto w-fit">
                The Arsenal of Features
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 md:mt-16 mx-auto">
                {arsenalData.map((item, index) => (
                    <div
                        data-aos="fade-up" data-aos-duration="600" data-aos-delay="100"
                        key={index}
                        className="bg-gradient-to-b from-primary/50 via-primary/10 to-transparent rounded-2xl p-[3px]"
                    >
                        <div className="w-[270px] sm:w-[320px] h-[300px] sm:h-[400px] bg-neutral-950 flex flex-col items-center rounded-2xl p-6 relative overflow-hidden text-center">
                            {/* Background */}
                            <img
                                src="cooked-bg.svg"
                                alt=""
                                className="absolute inset-0 object-cover opacity-50 pointer-events-none"
                            />

                            {/* Icon */}
                            <div className="flex-1 flex items-center justify-center">
                                <img
                                    src={item.imageLink}
                                    alt=""
                                    className="w-28 sm:w-32 h-28 sm:h-32 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <p className="text-xl sm:text-2xl font-medium text-white drop-shadow-xl">
                                {item.title}
                            </p>

                            {/* Description */}
                            <p className="text-sm sm:text-md font-light text-neutral-400 drop-shadow-xl mt-4">
                                {item.desc}
                            </p>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
