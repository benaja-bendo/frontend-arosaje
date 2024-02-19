import { FC } from 'react';


interface BannerProps {}



const Banner: FC<BannerProps> = () => (
 
    <header className='bg-[#121533] py-4 sm:px-10 px-6 font-[sans-serif] min-h-[70px]'>
    <div className='flex flex-wrap items-center lg:gap-y-2 gap-y-4 gap-x-4'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-white.svg" alt="logo" className='w-36' />
      </a>
      <div className='flex items-center ml-auto lg:order-1'>
        <div className="flex items-center">
          <span className="relative mr-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"
              className="cursor-pointer hover:fill-[#FFA726] inline-block" fill="#fff">
              <path
                d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                data-original="#000000" paint-order="fill markers stroke"></path>
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
          </span>
          <input type="text" placeholder="Search something..."
            className="bg-gray-50 focus:bg-white w-full px-6 h-10 rounded outline-none text-sm"></input>
        </div>
        <button id="toggle" className='lg:hidden ml-7'>
          <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <ul id="collapseMenu"
        className='lg:!flex lg:ml-8 max-lg:hidden max-lg:w-full lg:space-x-4 max-lg:space-y-2 max-lg:my-4'>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            className='text-[#FFA726] hover:text-[#FFA726] text-[15px] block font-semibold'>New</a></li>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            className='text-white hover:text-[#FFA726] text-[15px] block font-semibold'>Men</a></li>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            className='text-white hover:text-[#FFA726] text-[15px] block font-semibold'>Women</a></li>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            className='text-white hover:text-[#FFA726] text-[15px] block font-semibold'>Kids</a></li>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
            className='text-white hover:text-[#FFA726] text-[15px] block font-semibold'>Shops</a></li>
      </ul>
    </div>
  </header>
 
);

export default Banner;
