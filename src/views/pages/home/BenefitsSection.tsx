import Image from "next/image";

const BenefitsSection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8'>
      <div className='bg-white'>
        <div className='rounded-t-[2rem] md:rounded-t-[4rem] rounded-xl bg-white shadow-xl over overflow-hidden	'>
          <Image
            src={"/images/services-1.png"}
            alt={"section"}
            width={512}
            height={512}
          />
          <div className='p-8'>
            <div className='mb-4'>
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

      <div className='bg-white'>
        <div className='rounded-t-[2rem] md:rounded-t-[4rem] rounded-xl bg-white shadow-xl over overflow-hidden	'>
          <Image
            src={"/images/services-2.png"}
            alt={"section"}
            width={512}
            height={512}
          />
          <div className='p-8'>
            <div className='mb-4'>
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
