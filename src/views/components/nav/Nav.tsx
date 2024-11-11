"use client";

import {
  IconCaretDown,
  IconCaretUp,
  IconChevronLeft,
  IconInbox,
  IconMenu2,
} from "@tabler/icons-react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className='fixed top-0 w-full flex flex-col items-center justify-center z-50 mt-8'>
      <div className='container'>
        <nav className='bg-primary-500 rounded-[3rem] p-4 shadow-lg flex justify-between items-center bg-pattern relative z-[1]'>
          <div className='container mx-auto flex justify-between items-center'>
            <div className='text-white block md:hidden pl-2'>
              <IconMenu2 />
            </div>
            <a className='text-white font-bold text-lg flex-1 md:flex-none'>
              <Image
                src={"/images/nav-logo.png"}
                width={90}
                height={28}
                alt='Nav Logo'
              />
            </a>
            <div className='flex-1 hidden md:block'>
              <ul className='flex items-center align-center justify-center gap-8'>
                <li>
                  <a
                    href='#'
                    className='text-white hover:text-blue-200'
                  >
                    سرمایه گذاری
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-white hover:text-blue-200 flex align-center justify-center'
                  >
                    <IconCaretDown />
                    معاملات
                  </a>
                </li>
                <li className='group py-2'>
                  <a
                    href='#'
                    className='text-white hover:text-blue-200 flex align-center justify-center'
                  >
                    <IconCaretDown className='group-hover:hidden block' />
                    <IconCaretUp className='group-hover:block hidden' />
                    لیزینگ
                  </a>
                  <div className='group-hover:flex hidden rounded-b-[2.5rem] absolute gap-8 top-[42px] z-[-1] pt-[48px] pb-[24px] right-0 w-full bg-pattern bg-primary-500 items-center justify-center'>
                    <a
                      href='#'
                      className='flex border rounded-xl px-4 py-2 gap-2 border-dashed transition hover:shadow-xl text-white'
                    >
                      <IconInbox />
                      <div>
                        <div className='font-bold'>صندوق های سرمایه‌گذاری</div>
                        <div className=' text-sm'>صندوق های سرمایه‌گذاری</div>
                      </div>
                      <div className='flex items-center'>
                        <IconChevronLeft className='group-hover:opacity-100 opacity-0 transition' />
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-white hover:text-blue-200'
                  >
                    ارتباط با ما
                  </a>
                </li>
              </ul>
            </div>
            <a className='text-white hover:text-blue-200 rounded-full border-2 px-4 py-2'>
              ورود | ثبت نام
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
