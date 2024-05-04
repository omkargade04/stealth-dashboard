"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HiPencil } from "react-icons/hi2";
import { IoIosCube } from "react-icons/io";
import { FaFile } from "react-icons/fa6";
import data from "@/data.json";
import Field from "@/components/Field";
import Image from "next/image";

// Sample profile images
import profileImage1 from "@/public/assets/profile.png";
import { useRouter } from "next/navigation";
// Add other profile images as needed

export default function Home() {
  interface UserData {
    id: any;
    name: string;
    email: string;
    score: number;
  }
  const router = useRouter();
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <main>
      <div className="flex justify-start items-center m-10">
        <h2 className="text-lg text-zinc-300">Pages</h2>
        <h2 className="text-lg text-zinc-800"> / Assignment</h2>
      </div>
      <div className=" flex justify-start items-center m-10 ">
        <h2 className="text-xl font-semibold text-zinc-700">Sales BDE</h2>
      </div>

      <div className="">
        <Card className="w-full md:w-3/4 m-4 rounded-2xl">
          <div className="flex justify-between m-4 pb-5">
            <h1 className="text-lg md:text-2xl pt-2 font-semibold text-zinc-700">
              Sales BDE{" "}
            </h1>
            <div className="flex gap-x-4">
              <h1 className="text-lg md:text-2xl font-semibold pt-2 text-green-500">
                Active{" "}
              </h1>
              <HiPencil className="h-10 w-10 shadow-md hover:cursor-pointer p-3 rounded-lg" />
            </div>
          </div>

          <Field
            first={"Assignment Link"}
            second={"https://tiny.url/asknakdna"}
          ></Field>

          <Field first={"Assignment Hour"} second={"3 Hour"}></Field>

          <Field first={"Assignment Ends At"} second={"11 March 2024"}></Field>

          <div className="flex justify-start items-center m-4 gap-x-10 mt-14">
            <Button className="bg-white text-black md:text-lg text-sm font-semibold shadow-xl border border-slate-100 rounded-2xl flex justify-center items-center w-44 hover:bg-slate-200">
              <IoIosCube className="h-6 w-6 pr-2 text-black" />
              TO REVIEW
            </Button>
            <div className="flex">
              <FaFile className="h-6 w-6 pr-2 " />
              <p className="font-semibold md:text-lg text-sm hover:cursor-pointer"> SHORTLISTED</p>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-around m-4">
              <h2 className="text-slate-400 text-lg md:text-xl font-semibold">
                Candidates
              </h2>
              <h2 className="text-slate-400 text-lg md:text-2xl font-semibold pl-12 ">
                Scores
              </h2>
            </div>
          </div>

          {users.map((user, index) => (
            <div
              key={index}
              className="flex justify-around items-center m-4 hover:bg-slate-100 hover:cursor-pointer"
              onClick={() => {
                router.push(`/profile/${user.id}`);
              }}
            >
              <div className="flex ">
                <Image
                  src={profileImage1} // Example: alternate between two profile images
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-lg text-gray-700 font-semibold">
                  <div>
                    {user.name}
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                </div>
              </div>

              <div
                className={`text-2xl font-semibold ${
                  user.score > 49
                    ? "text-green-500"
                    : `${
                        (user.score || 0) >= 30 ? "text-yellow-400" : "text-red-500"
                      }`
                }`}
              >
                {user.score}%
              </div>
            </div>
          ))}
        </Card>
      </div>
    </main>
  );
}
