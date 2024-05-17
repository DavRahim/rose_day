import Image from "next/image";
import React from "react";
import shipping from "../../public/image13.png"

type Props = {};

const Shipping = (props: Props) => {
  return (
      <div className="w-full mx-auto mb-10">
          <div className="800px:w-[1150px] w-full mx-auto">
            <div>
                <Image
                src={shipping}
                alt=""
                width={1150}
                height={346}
                />
            </div>

          </div>

    </div>
  );
};

export default Shipping;
