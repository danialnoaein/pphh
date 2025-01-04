interface FundPricingStatusCardProps {
  data: {
    purchaseNav: number;
    saleNav: number;
    fundCapital: number;
    statisticNav: number;
    calcDate?: string;
  };
  type?: "purchaseNav" | "saleNav" | "fundCapital" | "statisticNav";
}

const FundPricingStatusCard = ({
  data,
  type = "purchaseNav",
}: FundPricingStatusCardProps) => {
  const getCardContent = () => {
    switch (type) {
      case "purchaseNav":
        return {
          title: "قیمت صدور",
          value: `${data.purchaseNav.toLocaleString()} ریال`,
        };
      case "saleNav":
        return {
          title: "قیمت ابطال",
          value: `${data.saleNav.toLocaleString()} ریال`,
        };
      case "fundCapital":
        return {
          title: "تعداد کل واحدهای صندوق",
          value: data.fundCapital.toLocaleString(),
        };
      case "statisticNav":
        return {
          title: "NAV آماری",
          value: `${data.statisticNav.toLocaleString()} ریال`,
        };
    }
  };

  const content = getCardContent();

  return (
    <div className="col-span-2 md:col-span-1 border-2 rounded-xl p-4 border-dashed text-center flex flex-col gap-1">
      <div className="flex justify-center gap-1">
        {content.title}
        {/* <IconInfoCircle className="text-gray-400" /> */}
      </div>
      <div className="flex gap-1 justify-center items-center">
        <span className="font-bold text-xl">{content.value}</span>
      </div>
    </div>
  );
};

export default FundPricingStatusCard;
