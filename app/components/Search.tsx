import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

type Props = {};

const Search = (props: Props) => {
    return (
        <div className="w-full mx-auto bg-[#F3FFFC]">

            <div className="800px:w-[1150px] w-full mx-auto">
                <div>
                    <FaBarsStaggered size={20}/>
                    <input name="search"/>
                    <div className="w-[59px] h-[59px] bg-primary">
                    <IoSearch />
                    </div>

                </div>


            </div>
        </div>



    );
};

export default Search;
