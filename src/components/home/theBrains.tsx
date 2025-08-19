import { socials } from "@/lib/mainPageData";

export default function TheBrains() {
    return (
        <div id="meet_developer" className="pt-10 w-full h-fit flex flex-col justify-between relative overflow-clip rounded-b-4xl">
            {/* Background Image */}
            <img
                src="gradii-1.png"
                alt="Meet Developer Background Image"
                className="absolute inset-0 w-full h-full rounded-b-4xl opacity-65 z-0 object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-transparent z-10"></div>

            {/* Developer Name Image */}
            <img
                src="long-name.svg"
                alt="Developer Name"
                className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
            />

            {/* Main Title */}
            <div className="relative z-20 mb-8 sm:mb-12">
                <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-medium text-neutral-500 text-center mx-auto px-4">
                    The Brains
                </p>
            </div>

            {/* Main Content Container */}
            <div className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-12 pb-8 sm:pb-12">

                {/* Mobile Layout (up to md) */}
                <div className="block lg:hidden">
                    {/* Profile Section - Mobile First */}
                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="flex justify-center mb-8 sm:mb-12 relative">
                        {/* Circle background */}
                        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-black/20 rounded-full backdrop-blur-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                        {/* Profile image container with circular clipping */}
                        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden relative z-25 flex items-end justify-center">
                            <img
                                src="me.png"
                                alt="Chandan Khamitkar's Profile Pic"
                                className="w-[200px] h-[250px] sm:w-[240px] sm:h-[300px] object-contain object-bottom"
                            />
                        </div>
                    </div>

                    {/* Info Section - Mobile */}
                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="space-y-6 sm:space-y-8 text-left">
                        {/* Engineer Description */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg font-medium text-neutral-300 leading-7 sm:leading-8">
                                I&apos;m an <span className="px-2 py-1 rounded-2xl bg-white/30 backdrop-blur-lg text-neutral-900 text-sm sm:text-base">Engineer</span> fascinated by the art of system design and databases.
                            </p>
                            <p className="text-base sm:text-lg font-semibold text-neutral-400 leading-7 sm:leading-8">
                                2x Full Stack Developer Intern&nbsp;|&nbsp;3x Hackathon Winner
                            </p>
                        </div>

                        {/* Quote Section */}
                        <div className="">
                            <p className="text-base sm:text-lg font-medium text-neutral-300 leading-7 mb-8">
                                The more rooted in the core, the better.
                            </p>
                            <p className="text-2xl font-medium italic text-neutral-200 leading-8">
                                <span className="text-3xl sm:text-4xl align-[-0.2em]">&quot; </span>
                                Design for scale.<br />Build for clarity.
                            </p>
                        </div>

                        {/* Previous Works */}
                        {/* <div>
                <p className="text-lg sm:text-xl text-neutral-100 font-medium mb-3">Prev Works</p>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <a
                    href="https://github.com/ChandanKhamitkar/BillBot"
                    className="underline underline-offset-4 font-semibold text-neutral-100 text-sm sm:text-base mb-2 sm:mb-0 sm:mr-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BillBot
                  </a>
                  <p className="text-sm sm:text-base text-neutral-400">— From text to invoice in a snap.</p>
                </div>
              </div> */}

                        {/* Social Icons */}
                        <div className="flex items-center justify-start space-x-4 mb-4">
                            {socials.map(({ href, Icon }, idx) => (
                                <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
                                    <Icon className="size-5 sm:size-6 hover:scale-110 transition-all duration-300 text-neutral-300 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Layout (lg and up) */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-12 items-start">
                    {/* LEFT Column */}
                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="flex flex-col justify-start items-start text-left space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg xl:text-xl font-medium text-neutral-300 leading-8">
                                I&apos;m an <span className="px-3 py-1 rounded-3xl bg-white/30 backdrop-blur-lg text-neutral-900">Engineer</span> fascinated by the art of system design and databases.
                            </p>
                            <p className="text-lg xl:text-xl font-semibold text-neutral-400 leading-8">
                                2x Full Stack Developer Intern&nbsp;|&nbsp;3x Hackathon Winner
                            </p>
                        </div>

                        <div className="pt-4">
                            <p className="text-lg xl:text-2xl text-neutral-100 font-medium mb-3">Prev Works</p>
                            <div className="flex items-center">
                                <a
                                    href="https://github.com/ChandanKhamitkar/BillBot"
                                    className="underline underline-offset-4 font-semibold text-neutral-100 mr-2 text-sm xl:text-base"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    BillBot
                                </a>
                                <p className="text-base xl:text-lg text-neutral-400">— From text to invoice in a snap.</p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-3 xl:space-x-4 pt-4">
                            {socials.map(({ href, Icon }, idx) => (
                                <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
                                    <Icon className="size-4 lg:size-5 xl:size-7 hover:scale-110 transition-all duration-300 text-neutral-300 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CENTER Column */}
                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="relative flex justify-center self-end">
                        {/* Circle behind profile */}
                        <div className="absolute flex items-center justify-center pointer-events-none z-15">
                            <div className="w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] bg-black/20 rounded-full backdrop-blur-md translate-y-[22%]"></div>
                        </div>

                        {/* Profile image */}
                        <div className="w-[320px] xl:w-[420px] aspect-[3/4] flex items-end overflow-hidden relative z-25 translate-y-[10%]">
                            <img
                                src="me.png"
                                alt="Chandan Khamitkar's Profile Pic"
                                className="w-full h-full object-contain object-bottom "
                            />
                        </div>
                    </div>

                    {/* RIGHT Column */}
                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="flex flex-col justify-start items-end text-right space-y-6">
                        <p className="text-lg xl:text-xl font-medium text-neutral-300 leading-8">
                            The more rooted in the core, the better.
                        </p>
                        <p className="text-2xl xl:text-4xl font-medium italic text-neutral-200 leading-9">
                            <span className="text-5xl xl:text-6xl align-[-0.2em]">&quot; </span>
                            Design for scale.<br />Build for clarity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
