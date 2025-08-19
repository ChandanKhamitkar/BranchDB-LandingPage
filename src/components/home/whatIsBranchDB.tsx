export default function WhatIsBranchDB() {
    return (
        <div className="flex flex-col justify-center items-center py-20 bg-black relative px-4 md:px-6">
            <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="flex justify-center items-center mx-auto w-[90%] gap-2 sm:gap-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent to-metaliclight rounded-full opacity-40"></div>
                <p className="text-4xl md:text-7xl text-neutrall-100 font-medium text-center text-wrap lg:text-nowrap">BranchDB at a Glance</p>
                <div className="h-px w-full bg-gradient-to-r from-metaliclight to-transparent rounded-full opacity-40"></div>
            </div>

            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="text-base sm:text-xl md:text-2xl text-neutral-500 max-w-5xl mx-auto text-center leading-7 md:leading-10 mt-6">BranchDB is an open-source, in-memory key-value database written in <span className="px-2 py-1 rounded-xl bg-neutral-700/70 text-primary text-sm sm:text-xl">C++</span> — built from scratch for performance and developer control. It supports expiration, disk persistence, multi-threaded architecture, compact logging and multi-user architecture.</p>

            <img src="database.svg" alt="DataBase icon" className="absolute size-16 sm:size-20 md:size-28 object-cover left-5 -rotate-12 top-0 lg:top-1/2 transform translate-y-1/2 lg:-translate-y-1/3 blur-xs" />
            <img src="bracket-square.svg" alt="Key Value icon" className="absolute size-12 sm:size-18 md:size-24 object-cover right-6 rotate-12 top-0 translate-y-3/4 lg:translate-y-0 lg:top-1/2 blur-xs" />
        </div>
    );
};
