import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  overflow: visible;
  position: relative;
  width: 100%;
  height: 100%;
`;

const AnimatedCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !["top", "ishovered", "isactive"].includes(prop),
})<{
  top: number;
  ishovered: boolean;
  isactive: boolean;
}>`
  width: 64px;
  height: 200px;
  top: ${({ top }) => `-${top}px`};
  transition: all 1s ease;
  animation: move-up-down 1.75s ease-in-out;
  position: relative;
  @media (min-width: 768px) {
    width: 64px;
    top: ${({ top }) => `-${top}px`};
  }
`;

const Bars = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hoveredCard === null) {
      interval = setInterval(() => {
        setActiveCard((prev) => {
          let nextCard;
          do {
            nextCard = Math.floor(Math.random() * cardData.length);
          } while (nextCard === prev);
          return nextCard;
        });
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [hoveredCard]);

  const cardData = [
    { link: "#", label: "خودرو" },
    { link: "#", label: "وبملت" },
    { link: "#", label: "رمپنا" },
    { link: "#", label: "چافست" },
    { link: "#", label: "شستا" },
    { link: "#", label: "فولاد" },
  ];

  return (
    <PageWrapper>
      <div className='relative min-h-[24rem] md:min-h-[34rem]'>
        <div className='flex'>
          <div className='flex-1 cards-section-bg-right h-[360px] md:h-[512px]'></div>
          <div className='flex-1 cards-section-bg-left h-[360px] md:h-[512px]'></div>
        </div>

        <div className='container mx-auto justify-center flex mt-[-7rem] md:mt-[-16rem] md:scale-110'>
          <div className='w-[310px] md:w-[500px] text-center justify-center items-center flex flex-col relative '>
            <div className='absolute'>
              <Image
                src={"/images/cards-pocket-bg.png"}
                alt={"section"}
                width={520}
                height={420}
              />
            </div>

            <div className='flex relative gap-4 top-[-9rem]'>
              {cardData.map((item, index) => (
                <AnimatedCard
                  key={index}
                  top={parseInt(`${Math.random() * 100}`)}
                  isactive={activeCard === index}
                  ishovered={hoveredCard === index}
                  onMouseEnter={() => {
                    setHoveredCard(index);
                    setActiveCard(index);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                  className='group mt-4'
                >
                  <div className='relative text-white text-lg font-bold flex flex-col items-center'>
                    <span className=' text-primary-500'>{item.label}</span>
                    <div className='w-3 h-3 bg-primary-500 rounded-full'></div>
                  </div>
                  <Image
                    src={"/images/stock-bar-bg.png"}
                    alt={"section"}
                    width={100}
                    height={420}
                  />
                </AnimatedCard>
              ))}
            </div>

            <div className='absolute md:w-[520px] bottom-[-104px] md:bottom-[-72px] m-[-10px] md:m-[8px]'>
              <Image
                src={"/images/cards-pocket.png"}
                alt={"section"}
                width={600}
                height={460}
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Bars;
