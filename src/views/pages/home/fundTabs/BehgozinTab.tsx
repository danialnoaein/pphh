import FundPricingStatusCard from "@/views/components/FundPricingStatusCard/FundPricingStatusCard";
import Image from "next/image";
import { IFundList } from "../Tabs";

interface BehgozinTabProps {
  fundData: IFundList;
  shortDesc: string;
  desc: string;
}
const BehgozinTab = ({ fundData, shortDesc, desc }: BehgozinTabProps) => {
  if (!fundData) {
    return null;
  }

  const { fund, fundInfo } = fundData;

  return (
    <div className="relative mx-auto bg-[#FAFBFF] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex-1 relative group  ">
          <div className="relative z-[1] flex justify-center items-center flex-col text-white">
            <Image
              src={"/images/fund-section-item.png"}
              alt={"section"}
              width={250}
              height={250}
              className="transition-transform duration-300 group-hover:scale-90 h-[300px] w-[300px] lg:w-[400px] lg:h-[400px]"
            />
            <div className="px-4 mb-[120px] sm:px-8">
              <div className="absolute right-0 px-5 transition-transform duration-300 group-hover:translate-y-[-20px] md:group-hover:translate-y-[-30px]">
                <div className="font-bold text-lg sm:text-2xl">
                  صندوق {fund.shortTitle}
                </div>
                <div className="text-xs sm:text-sm my-2 sm:my-4">
                  {fund.title}
                </div>
                <div className="text-xs sm:text-base leading-relaxed">
                  {shortDesc}
                </div>
                <div className="flex justify-end my-2 md:my-8">
                  <div className="text-sm sm:text-base transition-transform duration-300 group-hover:border group-hover:px-2 group-hover:p-2 rounded-3xl w-32 text-nowrap">
                    <div className="text-center">اطلاعات بیشتر ←</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={"/images/bg-packet.png"}
            alt={"section"}
            width={500}
            height={180}
            className="mt-[-250px] w-full h-[300px] sm:h-[350px] md:h-[450px] transition-transform duration-300 group-hover:translate-y-[-20px] md:group-hover:translate-y-[-70px]"
          />
        </div>

        <div className="flex-1 mx-4 pb-8 sm:mx-8 sm:pb-16">
          <div className="text-sm shadow w-20 rounded-full text-center mt-6 mb-4 sm:mt-12 sm:mb-6">
            تحلیل
          </div>
          <div className="mb-4 text-xl sm:mb-6 sm:text-4xl font-bold">
            صندوق سرمایه گذاری {fund.shortTitle}
          </div>
          <div className="text-justify text-sm sm:text-base leading-relaxed">
            {desc}
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 sm:mt-8">
            <FundPricingStatusCard data={fundInfo[0]} type="purchaseNav" />
            <FundPricingStatusCard data={fundInfo[0]} type="saleNav" />
            <FundPricingStatusCard data={fundInfo[0]} type="fundCapital" />
            <FundPricingStatusCard data={fundInfo[0]} type="statisticNav" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehgozinTab;
