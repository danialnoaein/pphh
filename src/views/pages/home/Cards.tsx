import Image from "next/image";

const Cards = () => {
  return (
    <div className='relative min-h-[30rem]'>
      <div className='flex'>
        <div className='flex-1 cards-section-bg-right h-[512px]'></div>
        <div className='flex-1 cards-section-bg-left h-[512px]'></div>
      </div>
      <div className='container mx-auto justify-center flex mt-[-10rem]'>
        <div className='w-[512px] text-center justify-center items-center flex flex-col relative'>
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
            <div className='transition-all absolute w-[460px] h-[400px] right-[-228px] top-[-310px] hover:top-[-330px] group'>
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={"section"}
                width={460}
                height={400}
              />
              <div className=' transition-all text-left text-white ml-8 mt-[-200px] hidden group-hover:block'>
                <span className='border rounded px-2 text-sm'>
                  اطلاعات بیشتر
                </span>
              </div>
            </div>

            <div className='transition-all absolute w-[460px] h-[400px] right-[-228px] top-[-260px]  hover:top-[-280px] group'>
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={"section"}
                width={460}
                height={400}
              />
              <div className=' transition-all text-left text-white ml-8 mt-[-200px] hidden group-hover:block'>
                <span className='border rounded px-2 text-sm'>
                  اطلاعات بیشتر
                </span>
              </div>
            </div>

            <div className='transition-all absolute w-[460px] h-[400px] right-[-228px] top-[-210px]  hover:top-[-230px] group'>
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={"section"}
                width={460}
                height={400}
              />
              <div className=' transition-all text-left text-white ml-8 mt-[-200px] hidden group-hover:block'>
                <span className='border rounded px-2 text-sm'>
                  اطلاعات بیشتر
                </span>
              </div>
            </div>

            <div className='transition-all absolute w-[460px] h-[400px] right-[-228px] top-[-160px]  hover:top-[-180px] group'>
              <Image
                src={"/images/pocket-card-bg.png"}
                alt={"section"}
                width={460}
                height={300}
              />
              <div className=' transition-all text-left text-white ml-8 mt-[-200px] hidden group-hover:block'>
                <span className='border rounded px-2 text-sm'>
                  اطلاعات بیشتر
                </span>
              </div>
            </div>
          </div>

          <div className='absolute bottom-[-166px]'>
            <Image
              className=''
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
