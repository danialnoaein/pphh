"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [cardPositions, setCardPositions] = useState<number[]>([]);

  useEffect(() => {
    // Calculate unique positions for each card on the client side
    setCardPositions([
      -220, // Card 1 initial top position
      -180, // Card 2 initial top position
      -140, // Card 3 initial top position
      -100, // Card 4 initial top position
    ]);

    const cardsCount = 4; // Number of cards
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        let newCard;
        do {
          newCard = Math.floor(Math.random() * cardsCount); // Randomly pick a card
        } while (newCard === prev); // Ensure a new card is chosen
        return newCard;
      });
    }, 3000); // Switch every 3 seconds

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
              src={"/images/cards-pocket-bg.png"}
              alt={"section"}
              width={470}
              height={400}
            />
          </div>

          {cardPositions.map((top, index) => (
            <div
              key={index}
              style={{
                top: `${top}px`,
              }}
              className={`transition-all absolute w-[310px] md:w-[460px] h-[400px] right-[-154px] md:right-[-228px] 
              hover:top-[${top - 20}px] hover:md:top-[${top - 20}px] 
              group ${activeCard === index ? "animate-move" : ""}`}
            >
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={`section ${index + 1}`}
                width={460}
                height={400}
              />
              <div className='transition-all text-left text-white ml-4 md:ml-8 mt-[-132px] md:mt-[-200px] hidden group-hover:block'>
                <Link
                  href={"#"}
                  className='border rounded px-2 text-sm pt-1'
                >
                  اطلاعات بیشتر {index + 1}
                </Link>
              </div>
            </div>
          ))}

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
