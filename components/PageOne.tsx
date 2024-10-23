import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const PageOne = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg">
      <h1 className="text-3xl font-semibold">Analyze Document</h1>
      <p className="text-[#7F8EA3]">
        Create your own custom detector or use a prebuilt one{" "}
      </p>
      <div>
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-6 w-min-xl space-y-4  ">
            <div className="border border-dashed border-[#7191E6] backdrop-blur-2xl rounded-lg flex flex-col gap-1 p-6 items-center">
              <Image
                src="/file1.svg"
                width={100}
                height={100}
                alt="Picture of the author"
                className="p-4"
              />
              <Button className="bg-[#3D52A1]">
                <Image
                  src="/uploadfile.svg"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                  className=""
                />
                Upload File
              </Button>
              <span className="text-md text-[#7F8EA3]">or drop files here</span>
            </div>
            <div className="space-y-2 text-sm flex gap-2">
              <div>
                <p className="max-w-xl">
                  Analyze document files online easily with our free document
                  analyzer our Analysis tools are here to help you get things
                  done—better, faster, smarter.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex">
                  <Image
                    src="/tick.svg"
                    width={15}
                    height={15}
                    alt="Picture of the author"
                    className=""
                  />
                  Analyze file size up to 99% accuracy
                </p>
                <p className="flex">
                  <Image
                    src="/tick.svg"
                    width={15}
                    height={15}
                    alt="Picture of the author"
                    className=""
                  />
                  Analyze file size up to 99% accuracy
                </p>
                <p className="flex">
                  <Image
                    src="/tick.svg"
                    width={15}
                    height={15}
                    alt="Picture of the author"
                    className=""
                  />
                  Analyze file size up to 99% accuracy
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PageOne;
