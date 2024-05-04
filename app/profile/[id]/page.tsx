/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps, useEffect, useState } from "react";
import Image from "next/image";
import profileImage1 from "@/public/profile.png";
import { useParams } from "next/navigation";
import data from "@/data.json";

export default function Component() {
  interface UserData {
    id: any;
    name: string;
    email: string;
    score: number;
  }

  const [user, setUser] = useState<UserData>();
  const { id } = useParams();

  const getUser = () => {
    const foundUser = data.find((userData) => userData.id === id);
    if (foundUser) {
      setUser(foundUser);
    } else {
      console.log("User not found");
    }
  };

  useEffect(() => {
    getUser();
  }, [getUser, id]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md pt-10">
      <div className="flex-1 space-y-6 pr-10">
        <div className="flex items-center space-x-4">
          <Image
            src={profileImage1}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <h2 className="md:text-3xl text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div
              className={`text-2xl font-semibold ${
                user.score > 49
                  ? "text-green-500"
                  : `${
                      (user.score || 0) >= 30
                        ? "text-yellow-400"
                        : "text-red-500"
                    }`
              }`}
            >
              {user.score}%
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-sm font-medium">Behavioural</h3>
            <span className="text-sm font-semibold text-green-500 ">
              9 / 10
            </span>
          </div>
          <Progress className="w-full" value={90} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-sm font-medium">Communication</h3>
            <span className="text-sm font-semibold text-green-500 ">
              8 / 10
            </span>
          </div>
          <Progress className="w-full " value={80} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-sm font-medium">Situation handling</h3>
            <span className="text-sm font-semibold text-yellow-500 ">
              6 / 10
            </span>
          </div>
          <Progress className="w-full" value={60} />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="text-sm text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Hobbies</h3>
            <p className="text-sm text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Introduction</h3>
            <p className="text-sm text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button className="bg-[#4FD1C5] hover:bg-[#55beb4] font-semibold text-xl text-white w-3/4">
            SHORTLIST
          </Button>
        </div>
      </div>
      <div className="md:ml-6 mt-6 md:mt-0 flex-1">
        <div className="relative">
          <iframe
            id="youtube-video"
            className="rounded-lg w-full h-auto"
            height="400"
            src="https://www.youtube.com/embed/8eRVxE9PEF0"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
            allowFullScreen
          ></iframe>

          <Button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
            <PlayIcon className="h-8 w-8 text-gray-200" />
          </Button>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Button className="text-gray-600" variant="ghost">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Tell me about yourself</h3>
            <p className="text-sm text-gray-500">Question 1 / 11</p>
          </div>
          <Button className="text-gray-600" variant="ghost">
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
