import { onest } from "@/lib/fonts";
export default function Performance() {
    return (
        <div className={`relative py-10 sm:py-20 w-full flex flex-col justify-center items-center overflow-x-hidden ${onest.className}`}>
            {/* Top Right */}
            <div
                className="absolute top-0 right-0 w-52 sm:w-96 h-52 sm:h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #FE6A00 0%, #983F00 70%, transparent 100%)',
                    transform: 'translate(40%, 0)'
                }}
            />

            {/* Top Left */}
            <div
                className="absolute top-20 left-0 w-32 sm:w-64 h-32 sm:h-64 rounded-full opacity-20 blur-2xl pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #FE6A00 0%, #983F00 60%, transparent 100%)',
                    transform: 'translate(-40%, -20%)'
                }}
            />

            <p className="text-3xl md:text-5xl text-neutral-100 font-medium mx-auto w-fit text-center relative z-10 px-2 sm:px-6">
                Performance Test
            </p>

            <div
                className="relative w-[90%] mt-12 rounded-2xl overflow-hidden shadow-2xl z-10 px-2 sm:px-6"
                style={{
                    perspective: '1000px',
                    perspectiveOrigin: 'center center'
                }}
            >
                <video
                    src="performance-test-vid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[300px] md:h-[450px] object-cover opacity-50"
                    style={{
                        transform: 'rotateX(15deg) rotateY(-8deg) translateZ(0)',
                        transformOrigin: 'center center',
                        transformStyle: 'preserve-3d'
                    }}
                />

                <div
                    className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center"
                >
                    <p className="text-6xl sm:text-7xl md:text-[150px] font-light text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        10 Million
                    </p>
                    <p className="text-xl sm:text-3xl md:text-4xl font-light text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        Requests ⚡
                    </p>
                </div>
            </div>

            <div className="mt-12 h-auto py-px bg-gradient-to-r from-transparent via-neutral-400/40 to-transparent w-[80%] px-0">

                <div className="bg-black py-6 flex flex-col sm:flex-row justify-between items-center w-full mx-auto px-2 sm:px-6 space-y-6 sm:space-y-0">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-5xl sm:text-6xl font-light">1,000</p>
                        <p className="text-base sm:text-xl font-light">Concurrent Clients</p>
                    </div>

                    <img src="forward.svg" alt="Move in" className="size-14 sm:size-20 object-contain rotate-90 sm:rotate-0" />

                    <p className="font-semibold text-3xl sm:text-4xl bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">0 Crashes</p>
                </div>
            </div>

            <p className="mt-6 md:mt-12 text-xs lg:text-base text-gray-400 text-center w-[90%] md:w-[70%] leading-5 sm:leading-normal relative z-10">
                Note: Performance tests were conducted on Lenovo ideapad Slim 3, 64-bit operating system with 8 GB RAM, 11th Gen Intel(R). Results may vary on different hardware.
            </p>
        </div>
    );
};