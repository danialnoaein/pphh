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
  id,
}: IntroSectionData) => {
  return (
    <div
      id={id}
      className={`
        container mx-auto my-4
        relative
        bg-[#FAFBFF]
        bg-no-repeat
        transition-all
        duration-1000
        group
        hover:cursor-pointer
        border
        overflow-hidden /* اگر تصویر یا پس‌زمینه بزرگ شد، قسمت اضافه مخفی شود */
        px-4 py-8       /* فضای کافی اطراف محتوا */
        ${
          reverseOrder
            ? "intro-section-image-left md:bg-[url('/images/intro-section-image-bg-left.png')]"
            : "intro-section-image-right md:bg-[url('/images/intro-section-image-bg-right.png')]"
        }
      `}
    >
      <div className="grid grid-cols-5 items-center">
        {/* ستونی که تصویر در آن قرار دارد */}
        <div
          className={`
            md:col-span-3 col-span-5
            flex items-center justify-center
            ${reverseOrder ? "md:order-last" : ""}
          `}
        >
          <div className="m-4 bg-no-repeat bg-cover bg-[url('/images/intro-section-image-bg-mobile.png')] md:bg-none overflow-hidden">
            <Image
              src={imageUrl}
              alt={"section"}
              width={400}
              height={400}
              className="
                transition-transform
                duration-300
                ease-in-out
                md:group-hover:scale-90  /* فقط در سایز md به بالا روی هاور بزرگ شود */
              "
            />
          </div>
        </div>
        {/* ستونی که متن در آن قرار دارد */}
        <div className="md:col-span-2 col-span-5  ">
          <div className="text-sm shadow w-28 py-1 rounded-full text-center mt-12 mb-6">
            {tagText}
          </div>

          {/* عنوان واکنش‌گرا بدون nowrap تا در صورت کمبود فضا شکسته شود */}
          <div className="mb-6 text-2xl lg:text-4xl font-bold leading-tight text-nowrap">
            {title}
          </div>

          {/* توضیحات */}
          <div className="text-justify">{description}</div>

          {/* بولت‌پوینت‌ها */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {bulletPoints.map((point, index) => (
              <div key={index} className="col-span-2 md:col-span-1">
                <div>
                  <IconPencil />
                </div>
                <div className="font-semibold">{point.title}</div>
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
