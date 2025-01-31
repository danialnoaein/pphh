"use client";

import Footer from "@/views/components/footer/Footer";
import Nav from "@/views/components/nav/Nav";
import Hero from "./Hero";
import MoveToTopInFooter from "./MoveToTopInFooter";
import TextSection from "./TextSection";
import Bars from "./Bars";
import Image from "next/image";

const AssetManagement = () => {
  const bulletPoints = [
    {
      title: "فرم اطلاعات مشتری",
      text: " توضیحات ویژگی مد نظر هلدینگ پاداش",
    },
    {
      title: "فرم ریسک سنجی",
      text: " توضیحات ویژگی مد نظر هلدینگ پاداش",
    },
    {
      title: "امضا قرارداد",
      text: " توضیحات ویژگی مد نظر هلدینگ پاداش",
    },
    {
      title: "فرم ایجاد کد prx",
      text: " توضیحات ویژگی مد نظر هلدینگ پاداش",
    },
  ];

  return (
    <div className='bg-[#FAFBFF]'>
      <Nav />
      <Hero />
      <Bars />
      <br />
      <br />
      <TextSection
        header={<div>یک فرایند بهتر برای سبدگردانی</div>}
        description={
          "شرکت سبدگردان پاداش سرمایه با هدف بهینه‌سازی بازده سرمایه‌گذاری و کاهش ریسک، فرآیند انتخاب، ترکیب و نظارت بر دارایی‌ها به‌ منظور دستیابی به اهداف مالی سرمایه‌گذاران را دنبال می‌کند"
        }
      />

      <div className='container mx-auto md:flex md:gap-10 py-10'>
        <div className='mx-4 md:mx-0 flex-1 border rounded-3xl md:rounded md:rounded-tl-3xl md:rounded-bl-3xl flex gap-4 items-center py-8 px-10 flex-col'>
          <Image
            src={"/images/asset-management-box.png"}
            alt={"section"}
            width={256}
            height={256}
            className='
                transition-transform
                duration-300
                ease-in-out
                md:group-hover:scale-90  /* فقط در سایز md به بالا روی هاور بزرگ شود */
              '
          />
          <div className='text-2xl font-bold mt-4'>
            گزارش‌دهی به سرمایه گذاران
          </div>
          <div className='text-center'>
            به منظور آگاهی سرمایه‌گذاران از وضعیت سبد خود، شرکت به ارائه
            گزارش‌های دوره‌ای نظیر اطلاعات عملکرد سبد، تغییرات در ترکیب
            دارایی‌ها و تحلیل بازار می‌پردازد.
          </div>
        </div>
        <div className='mx-4 md:mx-0 flex-1 border rounded-3xl md:rounded md:rounded-tr-3xl md:rounded-br-3xl flex gap-4 items-center py-8 px-10 flex-col mt-8 md:mt-0'>
          <Image
            src={"/images/asset-management-box.png"}
            alt={"section"}
            width={256}
            height={256}
            className='
                transition-transform
                duration-300
                ease-in-out
                md:group-hover:scale-90  /* فقط در سایز md به بالا روی هاور بزرگ شود */
              '
          />
          <div className='text-2xl font-bold mt-4'>
            گزارش‌دهی به سرمایه گذاران
          </div>
          <div className='text-center'>
            به منظور آگاهی سرمایه‌گذاران از وضعیت سبد خود، شرکت به ارائه
            گزارش‌های دوره‌ای نظیر اطلاعات عملکرد سبد، تغییرات در ترکیب
            دارایی‌ها و تحلیل بازار می‌پردازد.
          </div>
        </div>
      </div>

      <div className='px-4 md:px-0'>
        <div
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
        overflow-hidden 
        px-4 py-8      
        intro-section-image-right md:bg-[url('/images/intro-section-image-bg-right.png')]
      `}
        >
          <div className='grid grid-cols-5 items-center'>
            <div
              className={`
            md:col-span-3 col-span-5
            flex items-center justify-center
          `}
            >
              <div className="m-4 bg-no-repeat bg-cover bg-[url('/images/intro-section-image-bg-mobile.png')] md:bg-none overflow-hidden">
                <Image
                  src={"/images/asset-management-box.png"}
                  alt={"section"}
                  width={400}
                  height={400}
                  className='
                transition-transform
                duration-300
                ease-in-out
                md:group-hover:scale-90  /* فقط در سایز md به بالا روی هاور بزرگ شود */
              '
                />
              </div>
            </div>
            {/* ستونی که متن در آن قرار دارد */}
            <div className='md:col-span-2 col-span-5'>
              <div className='text-sm shadow w-40 py-1 rounded-full text-center mb-6'>
                سبدگردانی اختصاصی
              </div>

              {/* عنوان واکنش‌گرا بدون nowrap تا در صورت کمبود فضا شکسته شود */}
              <div className='mb-6 text-2xl lg:text-4xl font-bold leading-tight text-nowrap'>
                {"چهار قدم تا ثبت نام"}
              </div>

              {/* توضیحات */}
              <div className='text-justify'>
                شرکت سبدگردان پاداش سرمایه با هدف بهینه‌سازی بازده سرمایه‌گذاری
                و کاهش ریسک، انتخاب، ترکیب و نظارت بر دارایی‌ها را برای تحقق
                اهداف مالی سرمایه‌گذاران انجام می‌دهد. دارایی‌های متنوع این شرکت
                شامل سهام، اوراق درآمد ثابت، گواهی سپرده، اختیار معامله و سایر
                محصولات مالی است. فرآیند سبدگردانی شامل ریسک‌سنجی مشتریان، تحلیل
                بازار، انتخاب دارایی‌ها، تنوع‌بخشی، مدیریت ریسک، نظارت و
                گزارش‌دهی است. همچنین، شرکت با ارائه گزارش‌های دوره‌ای شامل
                عملکرد سبد، تغییرات ترکیب دارایی‌ها و تحلیل بازار، سرمایه‌گذاران
                را از وضعیت سبد خود مطلع می‌سازد.
              </div>

              {/* بولت‌پوینت‌ها */}
              <div className='grid grid-cols-2 gap-4 mt-8'>
                {bulletPoints.map((point, index) => (
                  <div
                    key={index}
                    className='col-span-2 md:col-span-1 border p-3 rounded-xl'
                  >
                    <div className='font-semibold'>{point.title}</div>
                    <div className='text-sm mt-1 text-gray-400'>
                      {point.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoveToTopInFooter />
      <Footer />
    </div>
  );
};

export default AssetManagement;
