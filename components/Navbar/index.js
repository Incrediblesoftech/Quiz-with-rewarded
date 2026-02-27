import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BiPlusCircle } from "react-icons/bi";
import { useScore } from "context/ScoreContext";

function NavBar({ title, className }) {
  const router = useRouter();
  const { score } = useScore(); // null initially

  const handleBack = () => {
    router.back();
  };

  const pageName = router.pathname.split('/').pop();
  const characterName = router.query.item;

  const formatPageName = (name) =>
    name
      ? name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      : "Page Title";

  const finalTitle = title || (characterName ? formatPageName(characterName) : formatPageName(pageName));

  return (
    <Fragment>
      <nav className="relative top-0 left-1/2 transform -translate-x-1/2  z-50">
        <div className="z-50 py-4 px-4 pt-6 flex items-center justify-between top-0 backdrop-blur relative">

          {/* Back Arrow */}
          <div className="left-6 flex items-center">
            <svg
              onClick={handleBack}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5019 12H3.67188"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title */}

          <div className={`absolute text-center left-[150px] transform -translate-x-1/2 text-white uppercase font-semibold ${className || 'text-[20px]'}`}>
            <a href="/start">
              {finalTitle}
            </a>

          </div>



          {/* Coin Section */}
          <div className="relative flex items-center">
            <div className="absolute -left-[7px] z-10 bg-primary1 rounded-full">
              <BiPlusCircle color="#ffb540" size={24} />
            </div>
            <div className="flex items-center gap-1 pl-5 pr-3 py-1 rounded-full border-2 border-primary4 z-0">
              <img
                src="/assets/image/coin.png"
                alt="coin"
                className="w-[17px] h-[17px]"
              />
              <span className="text-white font-semibold text-[16px]">
                {score !== null ? (score) : ""}
              </span>
            </div>
          </div>

        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
