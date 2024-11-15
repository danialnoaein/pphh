import { IconCaretUp, IconInfoCircle } from "@tabler/icons-react";

const FundPricingStatusCard = () => {
  return (
    <div className='col-span-2 md:col-span-1 border-2 rounded-xl p-4 border-dashed text-center flex flex-col gap-1 '>
      <div className='flex justify-center gap-1'>
        قیمت پایانی
        <IconInfoCircle className='text-gray-400' />
      </div>
      <div className='flex gap-1 justify-center items-center'>
        <span className='text-red-500'></span>
        <span className='text-green-500 flex text-xl'>
          <IconCaretUp /> (2.37%)
        </span>
        <span className='font-bold text-xl'>43,991</span>
        <span className='text-xs'>ریال</span>
      </div>
    </div>
  );
};

export default FundPricingStatusCard;
