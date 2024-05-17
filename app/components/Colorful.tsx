import React from "react";
import Featured from "./Featured";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import color from "../../public/image14.png"

type Props = {};

const Colorful = (props: Props) => {
    return (
        <>
            <Featured />
            <div className="w-full mx-auto mb-10">
                <div className="800px:w-[1150px] w-full mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="relative">
                    <Image
                    src={color}
                    alt="color"
                    width={270}
                    height={440}
                    />
                        <div className="w-full h-full absolute top-0 left-0 bg-[#012c2683]">
                                <div className="flex flex-col justify-center items-center h-full">
                                    <h2 className="text-[29px] text-secondary">Blue Lily</h2>
                                    <p className="text-[16px] text-secondary flex gap-2 items-center"><span>more information</span> <span><FaArrowRightLong size={16}/></span></p>
                            </div>
                    </div>

                    </div>
                    <div>
                    <Image
                    src={color}
                    alt="color"
                    width={270}
                    height={440}
                    />

                    </div>
                    <div>
                    <Image
                    src={color}
                    alt="color"
                    width={270}
                    height={440}
                    />

                    </div>
                    <div>
                    <Image
                    src={color}
                    alt="color"
                    width={270}
                    height={440}
                    />

                    </div>

                  </div>
                </div>
            </div>


        </>
    );
};

export default Colorful;
