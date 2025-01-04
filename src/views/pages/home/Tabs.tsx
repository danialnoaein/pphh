import axios from "axios";
import { JSX, useEffect, useState } from "react";
import BehgozinTab from "./fundTabs/BehgozinTab";

interface IFundInfo {
  calcDate: string;
  fundCapital: number;
  purchaseNav: number;
  saleNav: number;
  fundNavId: number;
  issuedUnit: number;
  revokedUnit: number;
  statisticNav: number;
}

export interface IFundList {
  fund: {
    id: number;
    title: string;
    shortTitle: string;
    fundType: number;
    monthlyProfit: number;
    yearlyProfit: number;
    dsCode: number;
  };
  fundInfo: IFundInfo[];
  fundtype: {
    id: number;
    title: string;
  };
}

interface Tab {
  id: number;
  title: string;
  tabName: string;
  component: JSX.Element;
}

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [funds, setFunds] = useState<Tab[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const shortDesc: Record<string, string> = {
    11394:
      "با سرمایه‌گذاری در صندوق اهرمی  می‌تونی بیشتر از دارایی خودت در بورس سرمایه‌گذاری کنی و به صورت اهرمی در بورس بازدهی کسب کنی.",
  };

  const desc: Record<string, string> = {
    11394:
      "صندوق سرمایه گذاری پاداش سرمایه بهگزین در تاریخ 1394/09/17 با دریافت مجوز از سازمان بورس و اوراق بهادار (سبا) فعالیت خود را آغاز کرد. این صندوق همواره یکی از پر بازده ترین صندوق های با درآمد ثابت کشور بوده است. خالص ارزش روز دارایی های صندوق سرمایه گذاری پاداش سرمایه بهگزین بر 21٫6٠٠میلیارد ریال بوده است که نشان دهنده اعتماد بسیار بالای مشتریان و سرمایه گذاران به این صندوق به عنوان یکی از قدیمی ترین و برترین صندوق های درآمد ثابت کشور بوده است.",
  };

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const response = await axios.get<IFundList[]>(
          "http://192.168.10.3:40/api/Fund"
        );
        const fundsData = response.data;
        const newTabsData: Tab[] = fundsData.map((item) => ({
          id: item.fund.id,
          title: item.fund.title,
          tabName: item.fund.shortTitle,
          component: (
            <BehgozinTab
              shortDesc={shortDesc[item.fund.dsCode]}
              desc={desc[item.fund.dsCode]}
              fundData={item}
            />
          ),
        }));

        setFunds(newTabsData);
      } catch {
        console.error("Error fetching funds");
      } finally {
        setLoading(false);
      }
    };

    fetchFunds();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-16 px-4 md:px-0">
      <div className="flex">
        {funds.map((tab, idx) => (
          <button
            key={tab.id}
            className={`border flex-1 md:flex-none border-b-0 rounded-t-full py-1 px-6 bg-[#F6F9FC] ${
              activeTabIndex === idx ? "bg-white" : ""
            } ${idx !== 0 ? "cursor-not-allowed opacity-50" : ""}`}
            onClick={() => idx === 0 && setActiveTabIndex(idx)}
            disabled={idx !== 0}
          >
            <span className="inline-block ml-1">صندوق {tab.tabName}</span>
          </button>
        ))}
      </div>
      <div className="border bg-[#FAFBFF]">
        {funds[activeTabIndex]?.component}
      </div>
    </div>
  );
};

export default Tabs;
