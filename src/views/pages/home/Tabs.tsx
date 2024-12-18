import axios from "axios";
import { useEffect, useState } from "react";
import BehgozinTab from "./fundTabs/BehgozinTab";

export interface FundList {
  id: number;
  title: string;
  shortTitle: string;
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

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const response = await axios.get<FundList[]>(
          "http://192.168.10.3:40/api/Fund"
        );
        const fundsData = response.data;
        const newTabsData: Tab[] = fundsData.map((fund) => ({
          id: fund.id,
          title: fund.title,
          tabName: fund.shortTitle,
          component: <BehgozinTab fundId={fund.id} />,
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
    <div className="container mx-auto my-16">
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
