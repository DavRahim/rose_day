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
                    <h1>
                          Free Shipping Services
                    </h1>
                    <p>*only for the same region</p>
                      <p><span><IoCallOutline /></span> <span>+62 1189-2719-00</span></p>
                      <p><span><MdOutlineMailOutline /></span> <span>order@platify.co</span></p>
                </div>
            </div>

          </div>

    </div>
  );
};

export default Shipping;
