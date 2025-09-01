export default function Trailer() {
    return (
        <div className="pb-20 pt-20 md:pt-40 w-full flex flex-col justify-center items-center px-4 sm:px-6">
            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="text-4xl md:text-7xl text-neutral-100 font-medium text-center mx-auto w-fit mb-10">
                Sneak Peek in 60 Sec
            </p>

            <div className="w-full max-w-4xl mx-auto aspect-video">
                <iframe
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="200"
                    src="https://www.youtube.com/embed/20eKOlHn814?si=szH7fugIcoTDmfwj"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full rounded-xl shadow-lg"
                ></iframe>
            </div>

        </div>
    );
};
