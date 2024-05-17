import Image from "next/image";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import location from "../../public/location.png"

type Props = {};

const Location = (props: Props) => {
    return (
        <div className="w-full mx-auto mb-10">
            <div className="800px:w-[1150px] w-full mx-auto">
                <div className="relative">
                    <Image
                        src={location}
                        alt=""
                        width={1150}
                        height={287}
                    />
                    <div className="bg-[#66666648] absolute top-0 left-0 w-full h-full">
                        <div className=" bg-white w-[500px] mt-10 ml-10 pl-6 pb-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-[24px] font-roboto text-black">Visit us</h2>
                                <h3 className="py-1 px-2 bg-primary text-[15px] font-roboto text-secondary">GET DIRECTIONS</h3>
                            </div>
                            <p className="text-[16px] font-leagueSpartan mt-4 text-slate-500">Gekikara Street 16, Atalanta  <br /> 1327 Block M  <br /> Mardial, Sigure  <br /> T2G 0T2
                            </p>
                            <p className="text-[18px] font-roboto mt-2">Open day : 11am-5:30pm everyday</p>
                            
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Location;
