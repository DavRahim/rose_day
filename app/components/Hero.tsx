import React from "react";
import hero from "../../public/hero.png"
import Image from "next/image";
type Props = {};


const Hero = (props: Props) => {
    return (
        <div>
            <div className="w-[90%] mx-auto flex">
                <div className="w-[40%]">
                    <h1 className="w-[400px] text-[40px] font-bold font-leagueSpartan">We Make Your Happiness <span>Bloom</span></h1>
                    <p>We are here for you and your loved ones every <span> Special Day</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum voluptatem a totam quod sint tempora. Est hic dicta corporis.</p>
                    <button>
                        Order Flowers
                    </button>

                </div>

                <div className="w-[60%]  border">
                    <Image
                    src={hero}
                    alt="hero"
                    width={500}
                    height={400}
                        className="ml-auto border"
                    />

                </div>

            </div>
        </div>

    );
};

export default Hero;
