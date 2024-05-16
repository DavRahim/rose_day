import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
type Props = {};

import hero1 from "../../public/hero1.png";
import hero2 from "../../public/hero2.png";
import hero3 from "../../public/hero3.png";
import hero4 from "../../public/pattern.png";


const Hero = (props: Props) => {
    return (
        <div className="bg-primary">
            <div className="800px:w-[1150px] w-full 800px:flex-row flex-col pb-20 mx-auto flex justify-between items-center">
                <div className="flex gap-1 800px:order-last">
                    <div>
                        <Image
                            src={hero1}
                            alt="hero3"
                            width={222}
                            height={257}
                            className="mb-1 "
                        />
                        <div className="relative">
                            <Image
                                src={hero2}
                                alt="hero2"
                                width={222}
                                height={257}
                                className=" z-30"

                            />
                            <Image
                                src={hero4}
                                alt="hero4"
                                width={115}
                                height={115}
                                className="absolute -bottom-8 -left-12 z-0"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src={hero3}
                            alt="hero"
                            width={380}
                            height={347}

                        />
                        <div className="w-full h-[50%] px-[26px] bottom-0 right-0 bg-gradient-to-t  from-[#234A45] to-transparent absolute">
                            <div className="flex flex-col justify-end h-full">
                                <h1 className="text-[28px] text-secondary">Anthurium Flower</h1>
                                <p className="text-[14px] text-secondary my-[18px]">The flower of human being. It has meaningful of fact that the plant always grow whatever season and weather...</p>
                                <button className="w-[100%] h-[48px] mb-2 bg-secondary text-primary">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-[64px] text-secondary font-medium font-leagueSpartan leading-[72px]">Happiness <br /> blooms from <br /> within</h1>
                    <p className="text-[16px] text-secondary py-5">Our environment, the world in which we live and <br />work, is a mirror of our attitudes and expectations.</p>

                    <div className="flex items-center gap-3">
                        <button className="bg-secondary text-primary text-[16px] text-center w-[156px] h-[59px] mr-5">
                            Shop now
                        </button>
                        <button className="text-[16px] text-secondary flex gap-2 items-center">
                            <p> Explore plants</p>
                            <FaArrowRightLong />
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;
