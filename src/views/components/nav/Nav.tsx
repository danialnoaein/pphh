"use client";

import {
  IconCaretDown,
  IconCashBanknote,
  IconInbox,
  IconMenu,
} from "@tabler/icons-react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className='fixed top-0 w-full flex flex-col items-center justify-center z-50 mt-8'>
      <div className='container '>
        <nav className=' bg-primary-500 rounded-[3rem] p-4 shadow-lg flex justify-between items-center bg-pattern'>
          <div className='container mx-auto flex justify-between items-center'>
            <IconMenu className='text-white hidden' />
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
              <a className='text-white hover:text-blue-200 flex align-center justify-center'>
                <IconCaretDown />
                معاملات
              </a>
              <a className='text-white hover:text-blue-200 flex align-center justify-center'>
                <IconCaretDown />
                لیزینگ
              </a>
              <a className='text-white hover:text-blue-200'>ارتباط با ما</a>
            </div>
            <a className='text-white hover:text-blue-200 rounded-full border-2 px-4 py-2'>
              ورود | ثبت نام
            </a>
          </div>
        </nav>
        <div className='hidden z-0 container text-white bg-primary-500 mt-[-40px] p-4 shadow-lg flex rounded-b-[2.5rem] justify-center items-center bg-pattern pt-10 gap-4'>
          <a
            href='#'
            className='flex border rounded-xl px-4 py-2 gap-2 border-dashed'
          >
            <IconInbox />
            <div>
              <div className='font-bold'>صندوق های سرمایه‌گذاری</div>
              <div className=' text-sm text-gray-300'>
                صندوق های سرمایه‌گذاری
              </div>
            </div>
          </a>

          <a
            href='#'
            className='flex border rounded-xl px-4 py-2 gap-2 border-dashed'
          >
            <IconCashBanknote />
            <div>
              <div className='font-bold'>صندوق های سرمایه‌گذاری</div>
              <div className=' text-sm text-gray-300'>
                صندوق های سرمایه‌گذاری
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
