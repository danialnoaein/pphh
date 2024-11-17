import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const AnimatedCard = styled.div<{
  top: number;
  isHovered: boolean;
  isActive: boolean;
}>`
  position: absolute;
  width: 310px;
  height: 400px;
  top: ${({ top }) => `-${100 + top * 40}px`};
  right: -154px;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    width: 460px;
    right: -228px;
    top: ${({ top }) => `-${160 + top * 50}px`};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      animation: move-up-down 1.5s ease-in-out;
    `}

  &:hover {
    animation: none;
    top: ${({ top }) => `-${180 + top * 50}px`};
  }
`;

const Cards = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number>(0);

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
    <div className='relative min-h-[24rem] md:min-h-[30rem]'>
      <div className='flex'>
        <div className='flex-1 cards-section-bg-right h-[360px] md:h-[512px]'></div>
        <div className='flex-1 cards-section-bg-left h-[360px] md:h-[512px]'></div>
      </div>
      <div className='container mx-auto justify-center flex mt-[-7rem] md:mt-[-10rem]'>
        <div className='w-[320px] md:w-[512px] text-center justify-center items-center flex flex-col relative'>
          <div className='absolute'>
            <Image
              className=''
              src={"/images/cards-pocket-bg.png"}
              alt={"section"}
              width={470}
              height={400}
            />
          </div>

          <div className='absolute'>
            {[3, 2, 1, 0].map((top, index) => (
              <AnimatedCard
                key={index}
                top={top}
                isActive={activeCard === index && hoveredCard !== index}
                isHovered={hoveredCard === index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className='group'
              >
                <Image
                  src={"/images/pocket-card-bg.png"}
                  alt={"section"}
                  width={460}
                  height={400}
                />
                <div className=' transition-all text-left text-white ml-4 md:ml-8 mt-[-132px] md:mt-[-200px] hidden group-hover:block'>
                  <Link
                    href={"#"}
                    className='border rounded px-2 text-sm pt-1'
                  >
                    اطلاعات بیشتر 1
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className='absolute bottom-[-112px] md:bottom-[-164px] m-[-16px] md:m-0'>
            <Image
              src={"/images/cards-pocket.png"}
              alt={"section"}
              width={520}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
