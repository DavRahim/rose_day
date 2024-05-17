import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

type Props = {};

const Search = (props: Props) => {
    return (
        <div className="w-full mx-auto bg-[#F3FFFC]">

            <div className="800px:w-[1150px] w-full mx-auto ">
                <div className="flex justify-around gap-3 items-center py-[85px] my-10">
                    <div className="w-[59px] h-[59px] flex items-center justify-center border border-[#004F44]">
                        <FaBarsStaggered size={20} color="#004F44"/>
                    </div>
                    <input className="flex-1 px-4 h-[59px] outline-none border border-[#004f45a4] text-[20px] font-leagueSpartan text-primary" name="search"/>
                    <div className="w-[59px] h-[59px] flex items-center justify-center bg-primary">
                    <IoSearch color="#fff" size={20}/>
                    </div>

                </div>


            </div>
        </div>



    );
};

export default Search;
