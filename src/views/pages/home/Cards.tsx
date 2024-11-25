import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ArrowLeft from "../../../../public/arrowLeft";

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
    right: -228px;
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(0);

  useEffect(() => {
    // Initialize card positions on the client

    // Randomly activate a card every 3 seconds
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        let nextCard;
        do {
          nextCard = Math.floor(Math.random() * 4); // Random card index
        } while (nextCard === prev);
        return nextCard;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[24rem] md:min-h-[30rem]">
      <div className="flex">
        <div className="flex-1 cards-section-bg-right h-[360px] md:h-[512px]"></div>
        <div className="flex-1 cards-section-bg-left h-[360px] md:h-[512px]"></div>
      </div>
      {/* <div className="container mx-auto justify-center flex mt-[-7rem] md:mt-[-10rem]">
        <div className="w-[320px] md:w-[512px] text-center justify-center items-center flex flex-col relative">
          <div className="absolute">
            <Image
              className=""
              src={"/images/cards-pocket-bg.png"}
              alt={"section"}
              width={470}
              height={400}
            />
          </div>

          <div className="absolute">
            {[3, 2, 1, 0].map((top, index) => (
              <AnimatedCard
                key={index}
                top={top}
                isactive={activeCard === index && hoveredCard !== index}
                ishovered={hoveredCard === index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group"
              >
                <Image
                  src={"/images/pocket-card-bg.png"}
                  alt={"section"}
                  width={460}
                  height={400}
                />
                <div className=" transition-all text-left text-white ml-4 md:ml-8 mt-[-132px] md:mt-[-200px] hidden group-hover:block">
                  <Link href={"#"} className="border rounded px-2 text-sm pt-1">
                    اطلاعات بیشتر 1
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="absolute bottom-[-104px] md:bottom-[-174px] m-[-10px] md:m-[8px]">
            <Image
              src={"/images/cards-pocket.png"}
              alt={"section"}
              width={520}
              height={400}
            />
          </div>
        </div>
      </div> */}
      <div className="container mx-auto justify-center flex mt-[-7rem] md:mt-[-10rem] md:scale-110">
        <div className="w-[310px] md:w-[500px] text-center justify-center items-center flex flex-col relative">
          <div className="absolute">
            <Image
              src={"/images/cards-pocket-bg.png"}
              alt={"section"}
              width={520}
              height={420}
            />
          </div>

          <div className="absolute">
            {[3, 2, 1, 0].map((top, index) => (
              <AnimatedCard
                key={index}
                top={top}
                isactive={activeCard === index && hoveredCard !== index}
                ishovered={hoveredCard === index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group"
              >
                <Image
                  src={"/images/pocket-card-bg.png"}
                  alt={"section"}
                  width={520}
                  height={420}
                />
                <div className="absolute top-4 right-4 text-white text-lg font-bold">
                  {/* عنوان کارت */}
                </div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <Link
                    href={"#"}
                    className="border border-white rounded-2xl px-2 text-sm py-1 flex items-center text-white"
                  >
                    <span>اطلاعات بیشتر</span>
                    <div>
                      <ArrowLeft />
                    </div>
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="absolute md:w-[520px] bottom-[-104px] md:bottom-[-178px] m-[-10px] md:m-[8px]">
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
  );
};

export default Cards;
