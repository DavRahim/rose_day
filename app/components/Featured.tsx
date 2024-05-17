import React from "react";

type Props = {};

const Featured = (props: Props) => {
    return (

        <div className="w-full mx-auto my-8">
            <div className="800px:w-[1150px] w-full 800px:flex-row flex-col mx-auto flex justify-between items-center">
                <h2 className="text-[40px] font-roboto text-primary">Featured</h2>
                <h5 className="text-[24px] font-leagueSpartan text-primary">view all</h5>
            </div>
        </div>

    );
};
export default Featured;
