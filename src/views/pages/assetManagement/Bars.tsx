import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

const PageWrapper = styled.div`
  overflow: visible;
  position: relative;
  width: 100%;
  height: 100%;
`;

const AnimatedCard = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["top", "ishovered", "isactive", "isbarshovered"].includes(prop),
})<{
  top: number;
  ishovered: boolean;
  isactive: boolean;
  isbarshovered: boolean;
}>`
  width: 64px;
  height: 200px;
  top: ${({ top }) => `-${top}px`};
  transition: all 1s ease;
  animation: ${({ isbarshovered }) =>
    isbarshovered ? "none" : "move-up-down 1.75s ease-in-out"};
  opacity: ${({ isbarshovered }) => (isbarshovered ? "0.5" : "1")};
  position: relative;
  @media (min-width: 768px) {
    width: 64px;
    top: ${({ top }) => `-${top}px`};
  }
`;

const cardData = [
  { link: "#", label: "خودرو" },
  { link: "#", label: "وبملت" },
  { link: "#", label: "رمپنا" },
  { link: "#", label: "چافست" },
  { link: "#", label: "شستا" },
  { link: "#", label: "فولاد" },
];

const Bars = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isBarsHovered, setIsBarsHovered] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isBarsHovered && hoveredCard === null) {
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
  }, [hoveredCard, isBarsHovered]);

  return (
    <PageWrapper>
      <div className='relative min-h-[24rem] md:min-h-[34rem]'>
        <div className='flex'>
          <div className='flex-1 cards-section-bg-right h-[360px] md:h-[512px]'></div>
          <div className='flex-1 cards-section-bg-left h-[360px] md:h-[512px]'></div>
        </div>

        <div className='container mx-auto justify-center flex mt-[-7rem] md:mt-[-16rem] md:scale-110'>
          <div
            className='w-[310px] md:w-[500px] text-center justify-center items-center flex flex-col relative'
            onMouseEnter={() => setIsBarsHovered(true)}
            onMouseLeave={() => setIsBarsHovered(false)}
          >
            <div className='absolute'>
              <Image
                src={"/images/cards-pocket-bg.png"}
                alt={"section"}
                width={520}
                height={420}
              />
            </div>

            {/* Bars Wrapper */}
            <div
              className='flex relative gap-4 top-[-9rem]'
              id='bars'
            >
              {/* Overlay Div */}

              {isBarsHovered && <SmoothLineChart />}

              {cardData.map((item, index) => (
                <AnimatedCard
                  key={index}
                  top={parseInt(`${Math.random() * 100}`)}
                  isactive={activeCard === index}
                  ishovered={hoveredCard === index}
                  isbarshovered={isBarsHovered}
                  onMouseEnter={() => {
                    setHoveredCard(index);
                    setActiveCard(index);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                  className='group mt-4'
                >
                  {/* Hide Label When Bars Hovered */}
                  {!isBarsHovered && (
                    <div className='relative text-white text-lg font-bold flex flex-col items-center'>
                      <span className='text-primary-500'>{item.label}</span>
                      <div className='w-3 h-3 bg-primary-500 rounded-full'></div>
                    </div>
                  )}
                  <Image
                    src={"/images/stock-bar-bg.png"}
                    alt={"section"}
                    width={100}
                    height={420}
                  />
                </AnimatedCard>
              ))}
            </div>

            <div className='absolute md:w-[520px] bottom-[-104px] md:bottom-[-72px] m-[-10px] md:m-[8px] z-10'>
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

const SmoothLineChart = () => {
  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      area: {
        fillTo: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#01438F"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [
          { offset: 50, color: "#FFFFFF", opacity: 0.75 }, // Start with coral color
          { offset: 100, color: "#01438F", opacity: 0.75 }, // End with lime green
        ],
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      dataLabels: {
        enabled: false,
      },
      categories: [],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 32,
      dataLabels: {
        enabled: false,
      },
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        show: false,
      },
    },
  };
  const series = [
    {
      name: "series-1",
      data: [8, 16, 10, 24, 16, 32, 24],
    },
  ];

  const [showTooltip, setShowTooltip] = useState(false); // State to control tooltip visibility

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(true); // Show tooltip after 1 second
    }, 1000);
  }, []);

  return (
    <div className='w-[500px] h-[280px] absolute z-10 top-[-4rem] mx-[-12px]'>
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        height='100%'
      />
      {showTooltip && (
        <div
          className={`absolute top-[38px] left-[6px] w-full flex justify-center items-center flex-col ${
            showTooltip ? "opacity-100" : "opacity-25"
          }`}
        >
          <div className='bg-[#01438F] text-xs text-white py-2 px-4 mb-2 rounded-full'>
            سبدگردانی پاداش
          </div>
          <div className='rounded-full w-5 h-5 bg-[#01438F] border-[2px] border-white'></div>
        </div>
      )}
    </div>
  );
};
