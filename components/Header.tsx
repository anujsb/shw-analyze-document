import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div>
      <div className="bg-[#3D52A1] flex items-center justify-between px-4">
        <div>
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
            className="p-4"
          />
        </div>
        <div className=" flex gap-4">
          <Button variant="outline" className="bg-[#3D52A1] text-white">
            Start your free demo
          </Button>
          <Button variant="default" className="bg-white text-black">
            Login
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between m-4 p-4 bg-[#7190e640] rounded-md">
        <div className="flex gap-2 items-center justify-center">
          <p className="rounded-full bg-[#3D52A1] px-2 text-white text-sm">
            New
          </p>
          <h1>We've released our structured extraction API.</h1>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <h1>Reach out for a demo by emailing</h1>
          <h1 className="font-semibold"> team@opticintellect.ai</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
