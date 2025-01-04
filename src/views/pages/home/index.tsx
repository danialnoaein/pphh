"use client";

import Footer from "@/views/components/footer/Footer";
import Nav from "@/views/components/nav/Nav";
import BenefitsSection from "./BenefitsSection";
import Cards from "./Cards";
import ContentSection from "./ContentSection";
import Hero from "./Hero";
import IntroSection from "./IntroSection";
import MoveToTopInFooter from "./MoveToTopInFooter";
import Tabs from "./Tabs";
import TextSection from "./TextSection";

const Home = () => {
  return (
    <div className="bg-[#FAFBFF]">
      <Nav />
      <Hero />
      <Cards />
      <br />
      <br />
      <TextSection
        header={
          <div>
            صندوق های سرمایه گذاری{" "}
            <span className="font-bold text-primary-500">پاداش</span>
          </div>
        }
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />
      <Tabs />
      <TextSection
        header={
          <div>
            پازل بازار‌ سرمایه چگونه با{" "}
            <span className="font-bold text-primary-500">پاداش</span> تکمیل
            می‌شود؟
          </div>
        }
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />
      <div className="px-4 md:px-0">
        <IntroSection reverseOrder={false} />
        <IntroSection reverseOrder={true} />
        <IntroSection reverseOrder={false} />
        <IntroSection reverseOrder={true} />
      </div>

      <TextSection
        header={
          <div>
            مزایای <span className="font-bold text-primary-500">پاداش</span> به
            نسبت رقبا چیست ؟
          </div>
        }
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />

      <BenefitsSection />
      <TextSection
        header={<div>صندوق های سرمایه گذاری پاداش</div>}
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />

      <ContentSection />
      <MoveToTopInFooter />
      <Footer />
    </div>
  );
};

export default Home;
