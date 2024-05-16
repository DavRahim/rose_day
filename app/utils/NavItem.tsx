import Link from "next/link";
import React from "react";


export const navItemData = [
    {
        name: "Shop",
        url: "/shop"
    },
    {
        name: "Products",
        url: "/products"
    },
    {
        name: "Fertilizer",
        url: "/fertilizer"
    },
    {
        name: "Guide",
        url: "/guide"
    },

]

type Props = {
    activeItem: number;
    isMobile: boolean
}
const NavItem: React.FC<Props> = ({ activeItem, isMobile }) => {

    return (<>
        <div className="hidden 800px:flex">
            {
                navItemData && navItemData.map((item, index) => (
                    <Link href={`${item.url}`} key={index} passHref>
                        <span className={`${activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-secondary"}  text-[16px] px-6 font-leagueSpartan font-[400]`}>{item.name}</span>
                    </Link>
                ))
            }
        </div>
    </>);
};

export default NavItem;
