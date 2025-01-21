import Image from "next/image";
import { IconPencil } from "@tabler/icons-react";
import { IntroSectionData } from "@/constant/IntroSection.data";

const IntroSection = ({
  reverseOrder,
  tagText,
  description,
  title,
  imageUrl,
  bulletPoints,
}: IntroSectionData) => {
  return (
    <div
      className={`border container relative mx-auto my-4 bg-[#FAFBFF] bg-none duration-1000 transition-all bg-no-repeat group ${
        reverseOrder
          ? "intro-section-image-left md:bg-[url('/images/intro-section-image-bg-left.png')]"
          : "intro-section-image-right md:bg-[url('/images/intro-section-image-bg-right.png')]"
      } hover:cursor-pointer`}
    >
      <div className={`grid grid-cols-5 items-center`}>
        <div
          className={`md:col-span-3 col-span-5 flex items-center justify-center ${
            reverseOrder ? "md:order-last" : ""
          }`}
        >
          <div className="m-4 bg-no-repeat bg-cover bg-[url('/images/intro-section-image-bg-mobile.png')] md:bg-none overflow-hidden">
            <Image
              src={imageUrl}
              alt={"section"}
              width={400}
              height={400}
              className="transition-transform duration-300 ease-in-out group-hover:scale-90"
            />
          </div>
        </div>
        <div className="md:col-span-2 col-span-5 mx-8 pb-16">
          <div className="text-sm shadow w-28 py-1 rounded-full text-center mt-12 mb-6 text-nowrap ">
            {tagText}
          </div>
          <div className="mb-6 text-4xl sm:text-nowrap">{title}</div>
          <div className="text-justify">{description}</div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {bulletPoints.map((point, index) => (
              <div key={index} className="col-span-2 md:col-span-1">
                <div>
                  <IconPencil />
                </div>
                <div>{point.title}</div>
                <div className="text-sm mt-1 text-gray-400">{point.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
