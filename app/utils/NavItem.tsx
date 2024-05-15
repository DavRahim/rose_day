import Link from "next/link";
import React from "react";


export const navItemData = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Shop",
        url: "/shop"
    },
    {
        name: "Blog",
        url: "/blog"
    },
    {
        name: "Page",
        url: "/blog"
    },
    {
        name: "About us",
        url: "/about"
    },
    {
        name: "Policy",
        url: "/policy"
    },
    {
        name: "FAQ",
        url: "/faq"
    },

]

type Props = {
    activeItem: number;
    isMobile: boolean
}
const NavItem: React.FC<Props> = ({activeItem,isMobile}) => {
    
  return (<>
      <div className="hidden 800px:flex">
          {
              navItemData && navItemData.map((item, index) => (
                  <Link href={`${item.url}`} key={index} passHref>
                      <span className={`${activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"}  text-[18px] px-6 font-leagueSpartan font-[400]`}>{item.name}</span>
                  </Link>
              ))
          }
      </div>
  </>);
};

export default NavItem;
