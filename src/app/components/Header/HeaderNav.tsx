"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import HomeNav from "./homeNav/page";
import ShopNav from "./shopNav/page";
import MsgNav from "./msgNav/page";
import MeNav from "./meNav/page";

const HeaderNav = () => {
  const pathname = usePathname();
  

  const renderHeader = () => {
    switch (pathname) {
      case "/":
        return <HomeNav></HomeNav>;
      case "/shop/home":
         return <ShopNav></ShopNav>;
      case "/message/detail":
        return <MsgNav></MsgNav>;
      case "/profile/me":
        return <MeNav></MeNav>
      default:

        break;
    }
  };
  return <div className="text-[16rem] text">
   {
    renderHeader()
   }
  </div>;
};

export default HeaderNav;
