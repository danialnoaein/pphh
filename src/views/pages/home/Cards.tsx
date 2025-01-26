import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ArrowLeft from "../../../../public/arrowLeft";

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
  position: absolute;
  width: 310px;
  height: 400px;
  top: ${({ top }) => `-${110 + top * 40}px`};
  right: -154px;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    width: 460px;
    right: -218px;
    top: ${({ top }) => `-${160 + top * 50}px`};
  }

  ${({ isactive }) =>
    isactive &&
    css`
      animation: move-up-down 1.5s ease-in-out;
    `}

  &:hover {
    animation: none;
    top: ${({ top }) => `-${130 + top * 40}px`};
    @media (min-width: 768px) {
      top: ${({ top }) => `-${180 + top * 50}px`};
    }
  }
`;

const Cards = () => {
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
    {
      scrollId: "section-portfolio",
      label: "سبدگردان پاداش",
      top: 4,
    },
    {
      scrollId: "section-funds",
      label: "صندوق های پاداش",
      top: 3,
    },
    { scrollId: "section-advisor", label: "مشاور سرمایه گذاری", top: 2 },
    { scrollId: "section-broker", label: "کارگزاری پاداش", top: 1 },
    { scrollId: "section-leasing", label: "لیزینگ پاداش", top: 0 },
  ];

  return (
    <PageWrapper>
      <div className="relative min-h-[24rem] md:min-h-[35rem]">
        <div className="flex">
          <div className="flex-1 cards-section-bg-right h-[360px] md:h-[562px]"></div>
          <div className="flex-1 cards-section-bg-left h-[360px] md:h-[562px]"></div>
        </div>

        <div className="container z-[999] mx-auto justify-center flex mt-[-5rem] md:mt-[-11rem] md:scale-110">
          <div className="w-[310px] md:w-[440px] text-center justify-center items-center flex flex-col relative ">
            <div className="absolute">
              <Image
                src={"/images/cards-pocket-bg.png"}
                alt={"section"}
                width={520}
                height={420}
              />
            </div>

            <div className="absolute">
              {cardData.map((item, index) => (
                <AnimatedCard
                  key={index}
                  top={item.top}
                  isactive={activeCard === index}
                  ishovered={hoveredCard === index}
                  onMouseEnter={() => {
                    setHoveredCard(index);
                    setActiveCard(index);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    document
                      .getElementById(item.scrollId!)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group mt-4 md:mt-7 cursor-pointer"
                >
                  <Image
                    src={"/images/pocket-card-bg.png"}
                    alt={"section"}
                    width={440}
                    height={400}
                  />
                  <div className="absolute top-4 right-4 text-white text-lg font-bold">
                    <span className="text-xs">{item.label}</span>
                  </div>
                  {activeCard === index && (
                    <div className="absolute top-4 left-4 md:left-10 flex items-center space-x-2 ">
                      <div className="border border-white rounded-2xl px-3 md:px-4 text-sm py-[2px] md:py-1 flex items-center text-white ">
                        <span className="text-[11px] md:text-xs ">
                          اطلاعات بیشتر
                        </span>
                        <div className="mr-1 ml-[-8px]">
                          <ArrowLeft />
                        </div>
                      </div>
                    </div>
                  )}
                </AnimatedCard>
              ))}
            </div>

            <div className="absolute md:w-[458px] bottom-[-104px] md:bottom-[-155px] m-[-10px] md:m-[8px]">
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

export default Cards;
