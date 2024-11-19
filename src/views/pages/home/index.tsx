"use client";

import Nav from "@/views/components/nav/Nav";
import Hero from "./Hero";
import Cards from "./Cards";
import Tabs from "./Tabs";
import IntroSection from "./IntroSection";
import TextSection from "./TextSection";
import BenefitsSection from "./BenefitsSection";
import ContentSection from "./ContentSection";
import MoveToTopInFooter from "./MoveToTopInFooter";
import Footer from "@/views/components/footer/Footer";

const Home = () => {
  return (
    <div className='bg-[#FAFBFF]'>
      <Nav />
      <Hero />
      <Cards />
      <br />
      <br />
      <TextSection
        header={
          <div>
            صندوق های سرمایه گذاری{" "}
            <span className='font-bold text-primary-500'>پاداش</span>
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
            <span className='font-bold text-primary-500'>پاداش</span> تکمیل
            می‌شود؟
          </div>
        }
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />

      <IntroSection reverseOrder={false} />
      <IntroSection reverseOrder={true} />
      <IntroSection reverseOrder={false} />
      <IntroSection reverseOrder={true} />

      <TextSection
        header={
          <div>
            مزایای <span className='font-bold text-primary-500'>پاداش</span> به
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
