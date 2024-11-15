import FundPricingStatusCard from "@/views/components/FundPricingStatusCard/FundPricingStatusCard";
import Image from "next/image";
import { useState } from "react";

const tabsData = [
  {
    title: "بهگزین",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
  },
  {
    title: "پتروپاداش",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },

  {
    title: "پاداش",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const content = (activeTabIndex: number) => {
    return (
      <div className={`relative mx-auto bg-[#FAFBFF] overflow-hidden`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 items-center`}>
          <div className='flex-1 relative'>
            <div className='relative z-[1] flex  justify-center items-center flex-col text-white'>
              <Image
                src={"/images/fund-section-item.png"}
                alt={"section"}
                width={400}
                height={400}
              />
              <div className='px-8 mt-[-32px]'>
                <div className='font-bold text-2xl'>
                  {tabsData[activeTabIndex].title}
                </div>
                <div className='text-sm mb-4'>
                  صندوق سرمایه‌گذاری اهرمی پاداش (واحدهای ممتاز)
                </div>
                <div>
                  با سرمایه‌گذاری در صندوق اهرمی کاریزما می‌تونی بیشتر از دارایی
                  خودت در بورس سرمایه‌گذاری کنی و به صورت اهرمی در بورس بازدهی
                  کسب کنی. صندوق اهرمی کاریزما نخستین و بزرگترین صندوق از نوع
                  اهرمی در بازار سرمایه است.
                </div>
                <div className='text-left mt-4'>اطلاعات بیشتر</div>
              </div>
            </div>
            <div className='absolute bottom-[-50px] z-0'>
              <Image
                src={"/images/cards-pocket-bg.png"}
                alt={"section"}
                width={800}
                height={400}
              />
            </div>
          </div>
          <div className='flex-1 mx-8 pb-16'>
            <div className='text-sm shadow w-20 rounded-full text-center mt-12 mb-6'>
              تحلیل
            </div>
            <div className='mb-6 text-4xl'>شرکت سبدگردان پاداش</div>
            <div className='text-justify'>
              کارگزاری پاداش از جمله کارگزاری‌هایی است که فرآیند ثبت نام و احراز
              هویت را به صورت غیرحضوری انجام می‌دهد. افتتاح حساب شما در کارگزاری
              پاداش کمتر از 5 دقیقه زمان نیاز دارد. شرکت کارگزاری پاداش با
              مدیریت حرفه ای و بهره گیری از نیروهای متخصص و باتجربه سعی در ارائه
              خدمات سرمایه گذاری در بازار سرمایه اعم از بورس اوراق بهادار، بورس
              کالا، انرژی و ابزار مشتقه، د
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8'>
              <FundPricingStatusCard />
              <FundPricingStatusCard />
              <FundPricingStatusCard />
              <FundPricingStatusCard />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className='container mx-auto my-16'>
      <div className='flex'>
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`border flex-1 md:flex-none border-b-0 rounded-t-full py-1 px-6 bg-[#F6F9FC]`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              <span className='hidden md:inline-block ml-1'>صندوق </span>
              {tab.title}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className='border bg-[#FAFBFF]'>
        <div>{content(activeTabIndex)}</div>
      </div>
    </div>
  );
};

export default Tabs;
