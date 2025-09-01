export default function Hero() {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center">
            {/* Background Image */}
            <img
                src="orange-half-bottom-circle.avif"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Hero content */}
            <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="flex flex-col items-center justify-center flex-1 relative z-20 px-4 sm:px-6">
                <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[190px] font-medium text-center bg-gradient-to-r from-white/80 via-yellow-100 to-white/80 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
                    BranchDB
                </h1>

                <p className="text-neutral-100/50 text-sm sm:text-lg md:text-xl lg:text-2xl font-extralight drop-shadow-[0_1px_6px_rgba(255,140,51,0.2)] text-center mt-2 sm:mt-0">
                    A durable, in-memory database built in C++.
                </p>
                {/* Gradient Store line */}
                <div className="w-[20rem] md:w-[40rem] relative mt-4 opacity-50 mx-auto">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/4" />
                </div>


                {/* <div className="absolute bottom-6 flex justify-center items-center w-full z-30">
                    <a
                        href="https://www.producthunt.com/products/branchdb?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-branchdb"
                        target="_blank"
                    >
                        <img
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1011367&theme=dark&t=1756658198519"
                            alt="BranchDB | Product Hunt"
                            style={{ width: "250px", height: "54px" }}
                            width="250"
                            height="54"
                        />
                    </a>
                    <a
                        href="https://peerlist.io/chandank/project/branchdb"
                        target="_blank"
                    >
                        <img
                            src="https://peerlist.io/api/v1/projects/embed/PRJHJKNQJNQMAOP7B1RPBE69NORR9D?showUpvote=false&theme=dark"
                            alt="BranchDB | Peerlist"
                            style={{ width: "250px", height: "54px" }}
                            width="250"
                            height="54"
                        />
                    </a>
                </div> */}
            </div>
        </div>
    );
};
