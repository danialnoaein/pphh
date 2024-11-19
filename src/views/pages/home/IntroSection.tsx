import Image from "next/image";
import { IconPencil } from "@tabler/icons-react";

const IntroSection = ({ reverseOrder }: { reverseOrder: boolean }) => {
  return (
    <div
      className={`border container relative mx-auto my-4 bg-[#FAFBFF] bg-none duration-1000 transition-all bg-no-repeat ${
        reverseOrder
          ? "intro-section-image-left md:bg-[url('/images/intro-section-image-bg-left.png')]"
          : "intro-section-image-right md:bg-[url('/images/intro-section-image-bg-right.png')]"
      }`}
    >
      <div className={`grid grid-cols-5 items-center`}>
        <div
          className={`md:col-span-3 col-span-5 flex items-center justify-center  ${
            reverseOrder ? "md:order-last" : ""
          }
        `}
        >
          <div>
            <Image
              src={"/images/section-1-sabad-gardan.png"}
              alt={"section"}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className='md:col-span-2 col-span-5 mx-8 pb-16'>
          <div className='text-sm shadow w-20 rounded-full text-center mt-12 mb-6'>
            تحلیل
          </div>
          <div className='mb-6 text-4xl'>شرکت سبدگردان پاداش</div>
          <div className='text-justify'>
            کارگزاری پاداش از جمله کارگزاری‌هایی است که فرآیند ثبت نام و احراز
            هویت را به صورت غیرحضوری انجام می‌دهد. افتتاح حساب شما در کارگزاری
            پاداش کمتر از 5 دقیقه زمان نیاز دارد. شرکت کارگزاری پاداش با مدیریت
            حرفه ای و بهره گیری از نیروهای متخصص و باتجربه سعی در ارائه خدمات
            سرمایه گذاری در بازار سرمایه اعم از بورس اوراق بهادار، بورس کالا،
            انرژی و ابزار مشتقه، د
          </div>
          <div className='grid grid-cols-2 gap-4 mt-8'>
            <div className='col-span-2 md:col-span-1'>
              <div>
                <IconPencil />
              </div>
              <div>عنوان</div>
              <div className='text-sm'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است،
              </div>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <div>
                <IconPencil />
              </div>
              <div>عنوان</div>
              <div className='text-sm'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است،
              </div>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <div>
                <IconPencil />
              </div>
              <div>عنوان</div>
              <div className='text-sm'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است،
              </div>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <div>
                <IconPencil />
              </div>
              <div>عنوان</div>
              <div className='text-sm'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است،
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
