import Image from "next/image";

const ContentSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white border-2 text-center overflow-hidden flex flex-col">
          <div className="p-8 flex-1">
            <div className="text-sm shadow w-20 rounded-full mx-auto">
              تحلیل
            </div>
            <div className="my-6 text-xl font-bold">
              نیم نگاهی به آینده بورس ایران
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون است.
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/content-poster.jpg"
              alt="section"
              width={512}
              height={512}
              className="w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white border-2 text-center overflow-hidden flex flex-col">
          <div className="p-8 flex-1">
            <div className="text-sm shadow w-20 rounded-full mx-auto">
              تحلیل
            </div>
            <div className="my-6 text-xl font-bold">
              نیم نگاهی به آینده بورس ایران
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون است.
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/content-poster.jpg"
              alt="section"
              width={512}
              height={512}
              className="w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white border-2 text-center overflow-hidden flex flex-col">
          <div className="p-8 flex-1">
            <div className="text-sm shadow w-20 rounded-full mx-auto">
              تحلیل
            </div>
            <div className="my-6 text-xl font-bold">
              نیم نگاهی به آینده بورس ایران
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون است.
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/content-poster.jpg"
              alt="section"
              width={512}
              height={512}
              className="w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
