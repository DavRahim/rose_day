import Image from "next/image";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import shipping from "../../public/image13.png"

type Props = {};

const Shipping = (props: Props) => {
    return (
        <div className="w-full mx-auto mb-10">
            <div className="800px:w-[1150px] w-full mx-auto">
                <div className="relative">
                    <Image
                        src={shipping}
                        alt=""
                        width={1150}
                        height={346}
                    />
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className=" mt-12 ml-16">
                            <h1 className="text-[44px] text-[#9C6955] font-roboto">
                                Free Shipping Services
                            </h1>
                            <p className="text-[17px] text-[#9C6955]">*only for the same region</p>
                            <div className="mt-[50px]">

                                <p className="text-[16px] text-[#9C6955] flex items-center gap-2"><span><IoCallOutline /></span> <span>+62 1189-2719-00</span></p>
                                <p className="text-[16px] text-[#9C6955] flex items-center gap-2"><span><MdOutlineMailOutline /></span> <span>order@platify.co</span></p>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Shipping;
