import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import FundPricingStatusCard from "@/views/components/FundPricingStatusCard/FundPricingStatusCard";

interface BehgozinTabProps {
  fundId: number;
}

interface Fund {
  id: number;
  dsCode: number;
  title: string;
  shortTitle: string;
  isDefault: boolean;
  isActive: boolean;
}

interface FundInfo {
  calcDate: string;
  fundCapital: number;
  purchaseNav: number;
  saleNav: number;
  fundNavId: number;
  issuedUnit: number;
  revokedUnit: number;
  statisticNav: number;
}

interface FundData {
  fund: Fund;
  fundInfo: FundInfo[];
}

const BehgozinTab = ({ fundId }: BehgozinTabProps) => {
  const [fundData, setFundData] = useState<FundData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFundDetails = async () => {
      try {
        const response = await axios.get<FundData>(
          `http://192.168.10.3:40/api/Fund/Get/${fundId}`
        );
        setFundData(response.data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };

    fetchFundDetails();
  }, [fundId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

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
                  با سرمایه‌گذاری در صندوق اهرمی کاریزما می‌تونی بیشتر از دارایی
                  خودت در بورس سرمایه‌گذاری کنی و به صورت اهرمی در بورس بازدهی
                  کسب کنی.
                </div>
                <div className="flex justify-end my-2 md:my-8">
                  <div className="text-sm sm:text-base transition-transform duration-300 group-hover:border group-hover:p-2 rounded-3xl w-32">
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
            صندوق ‌های سرمایه گذاری پاداش
          </div>
          <div className="text-justify text-sm sm:text-base leading-relaxed">
            صندوق سرمایه گذاری پاداش سرمایه بهگزین در تاریخ 1394/09/17 با دریافت
            مجوز از سازمان بورس و اوراق بهادار (سبا) فعالیت خود را آغاز کرد. این
            صندوق همواره یکی از پر بازده ترین صندوق های با درآمد ثابت کشور بوده
            است. خالص ارزش روز دارایی های صندوق سرمایه گذاری پاداش سرمایه بهگزین
            بر 21٫6٠٠میلیارد ریال بوده است که نشان دهنده اعتماد بسیار بالای
            مشتریان و سرمایه گذاران به این صندوق به عنوان یکی از قدیمی ترین و
            برترین صندوق های درآمد ثابت کشور بوده است.
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
