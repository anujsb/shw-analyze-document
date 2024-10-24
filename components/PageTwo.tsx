import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PageTwo = () => {
  return (
    <div className="bg-[#DCE2FE] h-screen w-full p-4">
      <div className="w-full flex justify-between items-center my-4">
        <h1 className="text-[#3D52A1] font-semibold">Sample analysis</h1>
        <Button className="bg-[#3D52A1]">
          <Image
            src="/upload.svg"
            width={15}
            height={15}
            alt="Picture of the author"
            className=""
          />
          Upload your own File
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-white h-full ">
        <div className="border-r p-4">???</div>
        <div className="p-4">
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Concatenated Text</TabsTrigger>
              <TabsTrigger value="password">Individual Blocks</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <h1>Goldman Stanley</h1>
              <p>
                9 May 2014 Americas/United States Equity Research Specialty
                Pharmaceuticals
              </p>
            </TabsContent>
            <TabsContent value="password">
            Individual Blocks
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
