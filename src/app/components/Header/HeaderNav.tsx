"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import RouteCinfig from "@/app/utils/route/config";
import HomeNav from "./homeNav/page";
import ShopNav from "./shopNav/page";
import MsgNav from "./msgNav/page";
import MeNav from "./meNav/page";
import './index.css'

const HeaderNav = () => {
  const pathname = usePathname();
  const renderHeader = () => {
    switch (pathname) {
      case RouteCinfig.HomeRoute:
        return <HomeNav></HomeNav>;
      case RouteCinfig.ShopRoute:
         return <ShopNav></ShopNav>;
      case RouteCinfig.MsgRoute:
        return <MsgNav></MsgNav>;
      case RouteCinfig.MeRoute:
        return <MeNav></MeNav>
      default:

        break;
    }
  };
  return <header className="text-[16rem] text">
   {
    renderHeader()
   }
  </header>;
};

export default HeaderNav;
