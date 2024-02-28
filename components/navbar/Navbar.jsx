import React from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-p py-4 rounded-t-lg text-white">
      <div className=" mx-6  flex justify-between items-center ">
        <div>
          <h2 className="text-[25px] font-[700]">Add Customer</h2>
          <div className="flex items-center gap-2 text-[12px]">
            <div>Dashboard</div>
            &gt;
            <div>Customer </div>
            &gt;
            <div>Add Customer</div>
          </div>
        </div>

        <div className="mr-4">
          <IoMdClose className="text-[18px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
