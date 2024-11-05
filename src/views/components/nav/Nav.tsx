"use client";

import Image from "next/image";

const Nav = () => {
  return (
    <div className='fixed top-0 w-full flex justify-center z-50 mt-8'>
      <nav className='container bg-primary-500 rounded-full p-4 shadow-lg flex justify-between items-center bg-pattern'>
        <div className='container mx-auto flex justify-between items-center'>
          <a className='text-white font-bold text-lg mr-4'>
            <Image
              src={"/images/nav-logo.png"}
              width={90}
              height={28}
              alt='Nav Logo'
            />
          </a>
          <div className='flex-1 flex items-center align-center justify-center gap-8'>
            <a className='text-white hover:text-blue-200'>سرمایه گذاری</a>
            <a className='text-white hover:text-blue-200'>معاملات</a>
            <a className='text-white hover:text-blue-200'>لیزینگ</a>
            <a className='text-white hover:text-blue-200'>ارتباط با ما</a>
          </div>
          <a className='text-white hover:text-blue-200 rounded-full border-2 px-4 py-2'>
            ورود | ثبت نام
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
