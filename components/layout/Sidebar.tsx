"use client";

import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { Card } from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div
        className="md:hidden fixed top-0 right-0 z-50 mr-3 mt-3"
        onClick={toggleSidebar}
      >
        <div className="w-6 h-6 relative">
          <RxHamburgerMenu className="h-6 w-6 text-black absolute top-3 left-0" />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed inset-y-0 left-0 z-40 transition duration-300 ease-in-out 
        bg-[#f5f5f5] overflow-y-auto p-2 md:w-[20rem] flex flex-col justify-start items-center h-screen`}
      >
        <div className="p-5 flex justify-center items-center text-xl text-zinc-700 font-semibold">
          <h1>Hi, AltWorld</h1>
        </div>
        <Separator className="h-[1px] bg-zinc-300 rounded-md w-[75%] mx-auto" />
        <div className="flex flex-col justify-center items-center mt-5 ml-14 space-y-10">
          <div className="flex justify-center items-center">
            <IoHome className="h-10 w-10 p-2 bg-[#fff] rounded-2xl text-[#4FD1C5]" />
            <div
              onClick={() => {
                router.push("/");
              }}
              className="text-lg hover:cursor-pointer text-zinc-700 font-semibold pl-4"
            >
              Dashboard
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <Card className="w-full bg-[#4FD1C5] rounded-2xl space-y-4 flex flex-col justify-center items-start p-4">
              <GoPlus
                className=" h-10 w-10 text-zinc-500 bg-white rounded-2xl hover:cursor-pointer"
                size={50}
              />
              <h3 className=" text-white font-semibold ">New Assignment?</h3>
              <p className=" text-sm text-zinc-100">
                Select from pre-defined questions to have a quick turnaround
              </p>
              <Button className="text-black w-full rounded-xl bg-[#fff] hover:bg-[#e8e8e8]">
                Create New Assignment
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
