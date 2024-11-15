import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <div className='relative min-h-[24rem] md:min-h-[30rem]'>
      <div className='flex'>
        <div className='flex-1 cards-section-bg-right h-[360px] md:h-[512px]'></div>
        <div className='flex-1 cards-section-bg-left h-[360px] md:h-[512px]'></div>
      </div>
      <div className='container mx-auto justify-center flex mt-[-7rem] md:mt-[-10rem]'>
        <div className='w-[360px] md:w-[512px] text-center justify-center items-center flex flex-col relative'>
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
            <div className='transition-all absolute w-[350px] md:w-[460px] h-[400px] right-[-174px] md:right-[-228px] top-[-240px] md:top-[-310px] hover:top-[-260px] hover:md:top-[-330px] group'>
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={"section"}
                width={460}
                height={400}
              />
              <div className=' transition-all text-left text-white ml-8 mt-[-150px] md:mt-[-200px] hidden group-hover:block'>
                <Link
                  href={"#"}
                  className='border rounded px-2 text-sm pt-1'
                >
                  اطلاعات بیشتر 1
                </Link>
              </div>
            </div>

            <div className='transition-all absolute w-[350px] md:w-[460px] h-[400px] right-[-174px] md:right-[-228px] top-[-200px] md:top-[-260px] hover:top-[-220px] hover:md:top-[-280px] group'>
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={"section"}
                width={460}
                height={400}
              />
              <div className=' transition-all text-left text-white ml-8 mt-[-150px] md:mt-[-200px] hidden group-hover:block'>
                <Link
                  href={"#"}
                  className='border rounded px-2 text-sm pt-1'
                >
                  اطلاعات بیشتر 2
                </Link>
              </div>
            </div>

            <div className='transition-all absolute w-[350px] md:w-[460px] h-[400px] right-[-174px] md:right-[-228px] top-[-160px] md:top-[-210px]  hover:top-[-180px] hover:md:top-[-230px] group'>
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={"section"}
                width={460}
                height={400}
              />
              <div className=' transition-all text-left text-white ml-8 mt-[-150px] md:mt-[-200px] hidden group-hover:block'>
                <Link
                  href={"#"}
                  className='border rounded px-2 text-sm pt-1'
                >
                  اطلاعات بیشتر 3
                </Link>
              </div>
            </div>

            <div className='transition-all absolute w-[350px] md:w-[460px] h-[400px] right-[-174px] md:right-[-228px] top-[-120px] md:top-[-160px] hover:top-[-140px] hover:md:top-[-180px] group'>
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={"section"}
                width={460}
                height={300}
              />
              <div className=' transition-all text-left text-white ml-8 mt-[-150px] md:mt-[-200px] hidden group-hover:block'>
                <Link
                  href={"#"}
                  className='border rounded px-2 text-sm pt-1'
                >
                  اطلاعات بیشتر 4
                </Link>
              </div>
            </div>
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
