export default function Performance() {
    return (
        <div className="py-10 sm:py-20 w-full flex flex-col justify-center items-center px-2 sm:px-6">
            <p className="text-4xl md:text-7xl text-neutral-100 font-medium mx-auto w-fit text-center">
                Performance Test
            </p>
            <div className="flex justify-center items-center">
                {/* <img src="benchmarks.svg" alt="Settings icon" className="size-9 sm:size-12 md:size-16 object-contain mr-4" /> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] gap-6 mt-12">
                <img src="benchmarks-card-reqs.png" alt="Benchmark Requests Details" className="w-full object-contain" />
                <img src="benchmarks-card-clients.png" alt="Benchmark Client Details" className="w-full object-contain" />
            </div>
            <p className="mt-6 md:mt-12 text-xs lg:text-base text-gray-400 text-center w-[90%] md:w-[70%] leading-5 sm:leading-normal">Note: Performance tests were conducted on Lenovo ideapad Slim 3, 64-bit operating system with 8 GB RAM, 11th Gen Intel(R). Results may vary on different hardware.</p>
        </div>

    );
};
