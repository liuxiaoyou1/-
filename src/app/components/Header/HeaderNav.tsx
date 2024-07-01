"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import RouteConfig from "@/app/utils/route/config";
import HomeNav from "./homeNav/page";
import ShopNav from "./shopNav/page";
import MsgNav from "./msgNav/page";
import MeNav from "./meNav/page";
import './index.css'

const HeaderNav = () => {
  const pathname = usePathname();
  const renderHeader = () => {
    switch (pathname) {
      case RouteConfig.HomeRoute:
        return <HomeNav></HomeNav>;
      case RouteConfig.ShopRoute:
         return <ShopNav></ShopNav>;
      case RouteConfig.MsgRoute:
        return <MsgNav></MsgNav>;
      case RouteConfig.MeRoute:
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
