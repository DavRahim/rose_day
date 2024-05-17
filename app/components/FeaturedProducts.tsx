"use client"

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import cart from "../../public/image8.png"
import Featured from "./Featured";

type Props = {};


const FeaturedProducts = (props: Props) => {
    const ref = useRef<any>(null);

    // const scroll = () => {
    //     ref.scrollX += 20;
    // };


    const scroll = (scrollOffset: number) => {

        ref.current.scrollLeft += scrollOffset;
        console.log(ref);
    }


    return (
        <>
            <Featured />
            <div className="w-full mx-auto pb-9">
                <div className="800px:w-[1150px] w-full mx-auto relative">
                    {/* cart */}
                    <div className="grid grid-flow-col auto-cols-max gap-[28px] overflow-y-auto scrollbar-hide scroll-smooth" ref={ref}>
                        <div className="!w-[280px] h-auto">
                            <Image
                                alt="cart"
                                src={cart}
                                width={280}
                                height={360}
                                className="w-full"

                            />
                            <div className="mt-5 w-full">
                                <div className="w-full flex justify-between items-center">
                                    <h2 className="text-[20px] text-primary font-roboto">Peperomia Ginny</h2>
                                    <h2 className="text-[20px] text-primary font-roboto">$25</h2>
                                </div>
                                <div className="w-full flex justify-between items-center mt-8">
                                    <div>
                                        <h4 className="text-base font-normal text-[#9EA9A7] font-roboto">
                                            Pot color
                                        </h4>
                                        <div className="w-full flex gap-1">
                                            <div className="w-[16px] h-[16px] bg-[#39362E] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#F3A195] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#EFEAE6] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#C38364] rounded-full"> </div>
                                        </div>
                                    </div>
                                    <button className="w-[79px] h-[35px] bg-primary text-[16px] text-secondary">
                                        Buy
                                    </button>

                                </div>

                            </div>

                        </div>
                        <div className="!w-[280px] h-auto">
                            <Image
                                alt="cart"
                                src={cart}
                                width={280}
                                height={360}
                                className="w-full"

                            />
                            <div className="mt-5 w-full">
                                <div className="w-full flex justify-between items-center">
                                    <h2 className="text-[20px] text-primary font-roboto">Peperomia Ginny</h2>
                                    <h2 className="text-[20px] text-primary font-roboto">$25</h2>
                                </div>
                                <div className="w-full flex justify-between items-center mt-8">
                                    <div>
                                        <h4 className="text-base font-normal text-[#9EA9A7] font-roboto">
                                            Pot color
                                        </h4>
                                        <div className="w-full flex gap-1">
                                            <div className="w-[16px] h-[16px] bg-[#39362E] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#F3A195] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#EFEAE6] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#C38364] rounded-full"> </div>
                                        </div>
                                    </div>
                                    <button className="w-[79px] h-[35px] bg-primary text-[16px] text-secondary">
                                        Buy
                                    </button>

                                </div>

                            </div>

                        </div>
                        <div className="!w-[280px] h-auto">
                            <Image
                                alt="cart"
                                src={cart}
                                width={280}
                                height={360}
                                className="w-full"

                            />
                            <div className="mt-5 w-full">
                                <div className="w-full flex justify-between items-center">
                                    <h2 className="text-[20px] text-primary font-roboto">Peperomia Ginny</h2>
                                    <h2 className="text-[20px] text-primary font-roboto">$25</h2>
                                </div>
                                <div className="w-full flex justify-between items-center mt-8">
                                    <div>
                                        <h4 className="text-base font-normal text-[#9EA9A7] font-roboto">
                                            Pot color
                                        </h4>
                                        <div className="w-full flex gap-1">
                                            <div className="w-[16px] h-[16px] bg-[#39362E] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#F3A195] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#EFEAE6] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#C38364] rounded-full"> </div>
                                        </div>
                                    </div>
                                    <button className="w-[79px] h-[35px] bg-primary text-[16px] text-secondary">
                                        Buy
                                    </button>

                                </div>

                            </div>

                        </div>
                        <div className="!w-[280px] h-auto">
                            <Image
                                alt="cart"
                                src={cart}
                                width={280}
                                height={360}
                                className="w-full"

                            />
                            <div className="mt-5 w-full">
                                <div className="w-full flex justify-between items-center">
                                    <h2 className="text-[20px] text-primary font-roboto">Peperomia Ginny</h2>
                                    <h2 className="text-[20px] text-primary font-roboto">$25</h2>
                                </div>
                                <div className="w-full flex justify-between items-center mt-8">
                                    <div>
                                        <h4 className="text-base font-normal text-[#9EA9A7] font-roboto">
                                            Pot color
                                        </h4>
                                        <div className="w-full flex gap-1">
                                            <div className="w-[16px] h-[16px] bg-[#39362E] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#F3A195] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#EFEAE6] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#C38364] rounded-full"> </div>
                                        </div>
                                    </div>
                                    <button className="w-[79px] h-[35px] bg-primary text-[16px] text-secondary">
                                        Buy
                                    </button>

                                </div>

                            </div>

                        </div>
                        <div className="!w-[280px] h-auto">
                            <Image
                                alt="cart"
                                src={cart}
                                width={280}
                                height={360}
                                className="w-full"

                            />
                            <div className="mt-5 w-full">
                                <div className="w-full flex justify-between items-center">
                                    <h2 className="text-[20px] text-primary font-roboto">Peperomia Ginny</h2>
                                    <h2 className="text-[20px] text-primary font-roboto">$25</h2>
                                </div>
                                <div className="w-full flex justify-between items-center mt-8">
                                    <div>
                                        <h4 className="text-base font-normal text-[#9EA9A7] font-roboto">
                                            Pot color
                                        </h4>
                                        <div className="w-full flex gap-1">
                                            <div className="w-[16px] h-[16px] bg-[#39362E] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#F3A195] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#EFEAE6] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#C38364] rounded-full"> </div>
                                        </div>
                                    </div>
                                    <button className="w-[79px] h-[35px] bg-primary text-[16px] text-secondary">
                                        Buy
                                    </button>

                                </div>

                            </div>

                        </div>
                        <div className="!w-[280px] h-auto">
                            <Image
                                alt="cart"
                                src={cart}
                                width={280}
                                height={360}
                                className="w-full"

                            />
                            <div className="mt-5 w-full">
                                <div className="w-full flex justify-between items-center">
                                    <h2 className="text-[20px] text-primary font-roboto">Peperomia Ginny</h2>
                                    <h2 className="text-[20px] text-primary font-roboto">$25</h2>
                                </div>
                                <div className="w-full flex justify-between items-center mt-8">
                                    <div>
                                        <h4 className="text-base font-normal text-[#9EA9A7] font-roboto">
                                            Pot color
                                        </h4>
                                        <div className="w-full flex gap-1">
                                            <div className="w-[16px] h-[16px] bg-[#39362E] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#F3A195] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#EFEAE6] rounded-full"> </div>
                                            <div className="w-[16px] h-[16px] bg-[#C38364] rounded-full"> </div>
                                        </div>
                                    </div>
                                    <button className="w-[79px] h-[35px] bg-primary text-[16px] text-secondary">
                                        Buy
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="w-[56px] h-[56px] absolute flex items-center justify-center right-5 top-[140px] rounded-full bg-white" onClick={() => scroll(280)}>
                        <FaArrowRight color="#004F44" />
                     </div>
                </div>
            </div>
        </>

    );
};

export default FeaturedProducts;
