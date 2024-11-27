import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ServiceCard from "./serviceCard";

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto grid lg:grid-cols-2 gap-8 px-8 w-full"
    >
      <div className="flex flex-col bg-white w-full">
        <div className="flex-1 rounded-t-[2rem] md:rounded-t-[4rem] rounded-xl bg-white shadow-xl overflow-hidden w-full">
          <Image
            src={"/images/services-1.png"}
            alt={"section"}
            width={512}
            height={100}
            className="object-cover h-[340px] w-full"
          />
          <div className="p-8">
            <div className="mb-4">
              <Image
                src={"/images/benefits-badge.png"}
                alt={"section"}
                width={128}
                height={32}
              />
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون است.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white w-full">
        <div className="flex-1 rounded-t-[2rem] md:rounded-t-[4rem] rounded-xl bg-white shadow-xl overflow-hidden w-full">
          <div>
            <ServiceCard isVisible={isVisible} />
          </div>
          <div className="p-8">
            <div className="mb-4">
              <Image
                src={"/images/benefits-badge.png"}
                alt={"section"}
                width={128}
                height={32}
              />
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون است.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
