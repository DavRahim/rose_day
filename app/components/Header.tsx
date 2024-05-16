import React from "react";
import NavItem from "../utils/NavItem";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbShoppingCart } from "react-icons/tb";
import Image from "next/image";
import logo from "../../public/logo.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

type Props = {};

const Header = (props: Props) => {
  const activeItem = 1
  return (
    <div className="w-full mx-auto bg-primary">
      <div className="800px:w-[1150px] w-full mx-auto py-3 flex items-center justify-between">
        <NavItem activeItem={activeItem} isMobile={false} />
        <div className='800px:hidden'>
          <HiOutlineMenuAlt3
            size={25}
            className='cursor-pointer dark:text-white text-black'
          // onClick={() => setOpenSidebar(true)}
          />
        </div>
        <Image
          alt="logo"
          src={logo}
          width={119}
          height={86}
        />
       
        <div className="flex items-center gap-2">
          <IoPersonOutline size={20} color="white"/>
          <IoSearch size={20} color="white"/>
          <IoMdHeartEmpty size={20} color="white"/>
          <TbShoppingCart size={20} color="white"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
