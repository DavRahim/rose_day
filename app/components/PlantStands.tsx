import Image from "next/image";
import React from "react";
import plant from "../../public/image5.png"
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {};

const PlantStands = (props: Props) => {
  return (
      <div className="w-full mb-10 flex bg-[#F3FFFC] py-[80px]">
          <div className="800px:w-[1150px] w-full mx-auto">
            <div>
                  <h2 className="text-[40px] font-roboto text-primary mb-7">Plant stands</h2>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <Image
                    src={plant}
                    alt="plant"
                    width={370}
                    height={472}
                    />
                </div>
                <div>
                    <Image
                    src={plant}
                    alt="plant"
                    width={370}
                    height={472}
                    />
                </div>
                <div>
                    <Image
                    src={plant}
                    alt="plant"
                    width={370}
                    height={472}
                    />
                </div>
            </div>
             
          </div>
          <p className="text-[16px] text-primary flex gap-2 items-center"><span>more</span> <span><FaArrowRightLong size={16} /></span></p>
    </div>
  );
};

export default PlantStands;
