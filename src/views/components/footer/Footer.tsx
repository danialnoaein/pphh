import Image from "next/image";

const Footer = () => {
  return (
    <div className='bg-primary-500 bg-pattern'>
      <div className='container mx-auto text-white'>
        <div className='grid grid-cols-1 md:grid-cols-5 py-8'>
          <div>
            <div className='mb-4'>صندوق ها</div>
            <div>
              <ul className='flex flex-col gap-2'>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='mb-4'>صندوق ها</div>
            <div>
              <ul className='flex flex-col gap-2'>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='mb-4'>صندوق ها</div>
            <div>
              <ul className='flex flex-col gap-2'>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='mb-4'>صندوق ها</div>
            <div>
              <ul className='flex flex-col gap-2'>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
                <li>
                  <a href='#'>پاداش</a>
                </li>
              </ul>
            </div>
          </div>
          <div>Social Media Links</div>
        </div>
        <div className='border-t border-white flex py-4 mt-4'>
          <Image
            src={"/images/nav-logo.png"}
            width={90}
            height={28}
            alt='Nav Logo'
          />
          <div className='flex-1'></div>
          <div>
            <a className='text-white hover:text-blue-200 rounded border-2 px-2 py-1'>
              ورود | ثبت نام
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
