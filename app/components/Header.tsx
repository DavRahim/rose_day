import React from "react";
import NavItem from "../utils/NavItem";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbShoppingCart } from "react-icons/tb";

type Props = {};

const Header = (props: Props) => {
  const activeItem = 1
  return (
    <div className=" bg-[#FAF2FF] border-dashed border-b-2">
      <div className=" w-[90%] mx-auto py-3 flex items-center justify-between">
        <div className="font-roboto font-bold text-[28px]">
          <p>Rose Day</p>
        </div>
        <NavItem activeItem={activeItem} isMobile={false} />
        <div className="flex items-center gap-2">
          <IoPersonOutline size={20} />
          <IoSearch size={20} />
          <IoMdHeartEmpty size={20} />
          <TbShoppingCart size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
