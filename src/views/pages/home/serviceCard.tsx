"use client";
import { useState } from "react";
import styled, { css } from "styled-components";
import BasketMakerIcon from "../../../../public/basketMaker";
import CounselingIcon from "../../../../public/counseling";
import LeasingIcon from "../../../../public/leasing";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./images/bg-card-padash.png");
  background-position: center;
  background-repeat: no-repeat;
  width: 512px;
  height: 340px;
`;

const MainCard = styled.div<{ isHovered: boolean }>`
  position: relative;
  width: 500px;
  height: 300px;
  border-radius: 30px; /* برای انحنای مستطیل */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const AnimatedItem = styled.div<{
  isVisible: boolean;
  x: number;
  y: number;
}>`
  position: absolute;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${({ isVisible, x, y }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translate(${x}px, ${y}px) scale(1);
    `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  line-height: 35px;
`;

const ServiceCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    { label: "مشاوره", x: -190, y: 10, icon: <CounselingIcon /> },
    { label: "سبدگردان", x: -100, y: -100, icon: <BasketMakerIcon /> },
    { label: "لیزینگ", x: 100, y: -100, icon: <LeasingIcon /> },
    { label: "کارگزاری", x: 190, y: 10, icon: <CounselingIcon /> },
  ];

  return (
    <Container>
      <MainCard
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            isVisible={isHovered}
            x={item.x}
            y={item.y}
            className="w-20 h-20 rounded-full flex justify-center items-center text-center text-white font-bold"
          >
            {item.icon}
            <div className="ml-[-7px]">{item.label}</div>
          </AnimatedItem>
        ))}
      </MainCard>
    </Container>
  );
};

export default ServiceCard;
