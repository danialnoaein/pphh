import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ServiceCard from "./serviceCard";

const BenefitsSection = () => {
  // برای جدا کردن visibility هر سکشن
  const [isFirstVisible, setIsFirstVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);

  // مخفی‌سازی هدر سکشن اول
  const [hideHeader, setHideHeader] = useState(false);

  // رفرنس‌های سکشن اول
  const firstSectionRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const chatContentRef = useRef<HTMLDivElement | null>(null);

  // رفرنس سکشن دوم
  const secondSectionRef = useRef<HTMLDivElement | null>(null);

  // تنظیم IntersectionObserver برای هر سکشن
  useEffect(() => {
    // سکشن اول
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsFirstVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    // سکشن دوم
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsSecondVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (firstSectionRef.current) {
      observer1.observe(firstSectionRef.current);
    }
    if (secondSectionRef.current) {
      observer2.observe(secondSectionRef.current);
    }

    return () => {
      if (firstSectionRef.current) observer1.unobserve(firstSectionRef.current);
      if (secondSectionRef.current)
        observer2.unobserve(secondSectionRef.current);
    };
  }, []);

  // منطق انیمیشن اسکرول خودکار و مخفی/ظاهر کردن هدر مخصوص سکشن اول
  useEffect(() => {
    if (isFirstVisible) {
      setHideHeader(true);

      // اسکرول خودکار با استفاده از translateY
      if (chatContainerRef.current && chatContentRef.current) {
        const container = chatContainerRef.current;
        const content = chatContentRef.current;

        const containerHeight = container.clientHeight;
        const contentHeight = content.clientHeight;

        // فقط اگر محتوای چت بلندتر از کانتینر بود
        if (contentHeight > containerHeight) {
          const totalScroll = contentHeight - containerHeight;
          const duration = 1500; // میلی‌ثانیه

          let startTime: number | null = null;

          function animateScroll(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const translateY = totalScroll * progress;
            content.style.transform = `translateY(-${translateY}px)`;

            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          }
          requestAnimationFrame(animateScroll);
        }
      }
    } else {
      setHideHeader(false);
      if (chatContentRef.current) {
        // بازگرداندن محتوای چت به ابتدای کادر
        chatContentRef.current.style.transform = "translateY(0)";
      }
    }
  }, [isFirstVisible]);

  return (
    <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-8 w-full">
      {/* سکشن اول */}
      <div
        ref={firstSectionRef} // ref مخصوص سکشن اول
        className="flex flex-col bg-white w-full shadow-xl rounded-xl"
      >
        <div
          ref={chatContainerRef}
          className="
            relative
            rounded-t-[2rem] md:rounded-t-[4rem] rounded-xl
            bg-white shadow-xl
            w-full
            overflow-hidden
            min-h-[340px]
          "
        >
          {/* بک‌گراند */}
          <Image
            src={"/images/bg-chat.png"}
            alt="section-bg"
            fill
            className="object-cover"
          />

          {/* هدر که قرار است محو شود */}
          <div
            className={`
              absolute top-10 left-0 w-full
              transition-opacity duration-700
              z-10
              ${hideHeader ? "opacity-0" : "opacity-100"}
            `}
          >
            <Image
              src={"/images/header-chat.png"}
              alt="header-overlay"
              width={600}
              height={150}
              className="mx-auto"
            />
          </div>

          {/* محتوای چت با ارتفاع زیاد */}
          <div
            ref={chatContentRef}
            className="
              absolute top-0 left-0 w-full
              py-8 px-3 pt-[300px]
            "
          >
            <Image
              src={"/images/chat.png"}
              alt="chat"
              width={400}
              height={1200}
              className="mx-auto"
            />
          </div>
        </div>

        {/* متن زیر سکشن اول */}
        <div className="p-8">
          <div className="mb-4">
            <Image
              src={"/images/benefits-badge.png"}
              alt="section"
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

      {/* سکشن دوم */}
      <div
        ref={secondSectionRef} // ref مخصوص سکشن دوم
        className="flex flex-col bg-white w-full"
      >
        <div
          className="
            flex-1 rounded-t-[2rem] md:rounded-t-[4rem] rounded-xl
            bg-white shadow-xl overflow-hidden w-full
          "
        >
          {/* در اینجا به ServiceCard مقدار isSecondVisible را می‌دهیم */}
          <div>
            <ServiceCard isVisible={isSecondVisible} />
          </div>
          <div className="p-8">
            <div className="mb-4">
              <Image
                src={"/images/benefits-badge.png"}
                alt="section"
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
