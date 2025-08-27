import { blogsData } from "@/lib/mainPageData";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function BlogBytes() {
  return (
    <div className="pb-20 pt-20 md:pt-40">
      <p
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
        className="text-4xl md:text-7xl text-neutral-100 font-medium text-center mx-auto w-fit"
      >
        Blog Bytes
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
        className="mt-10 flex flex-col md:flex-row justify-center items-center md:items-stretch h-max px-6 border border-neutral-400/20"
      >
        {blogsData.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-start items-start bg-neutral-950/30 border border-neutral-400/20 pb-4 px-4 sm:px-6 sm:py-6 w-full sm:w-96 overflow-hidden cursor-pointer"
          >
            <img src={item.imageLink} alt="Card Icon" className="w-full h-48 sm:h-56 object-contain" />

            <div className="w-full mt-4">
              <p className="text-lg sm:text-2xl font-medium text-white drop-shadow-xl">
                {item.title}
              </p>
            </div>

            <a href={item.link} target="_blank" className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="flex items-center gap-2 text-white text-lg font-medium">
                <span>Start Reading</span>
                <FaExternalLinkAlt className="text-xl" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
