"use client";
import { useRouter } from "next/navigation";
import "./index.css";
import RouteConfig from '@/app/utils/route/config'
import { SetStateAction, useState } from "react";

interface INavItem {
  label: string;
  href: string;
  h:Boolean;
  icon?: React.ReactNode;
}
const Footer = () => {
  const navItems = [
    { label: "首页", href: RouteConfig.HomeRoute,h:true},
    { label: "商城", href: RouteConfig.ShopRoute ,h:false},
    {
      label: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-30"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      ),
      h:false,
      href: "/add",
    },
    { label: "消息", href: RouteConfig.MsgRoute,h:false},
    { label: "我", href: RouteConfig.MeRoute,h:false },
  ];
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavItemClick = (item: INavItem,index: Number) => {
    setSelectedIndex(index as SetStateAction<number>);
    router.push(item.href);
  };
  return (
    <ul className="fixed dyn-footer text-[16rem]">
      {navItems.map((item, index) => (
        <li
          className="flex flex-auto items-center justify-center h-full "
          style={{ color: index === selectedIndex ? '#fff' : '#898989' }}
          key={index}
          onClick={() => handleNavItemClick(item,index)}
        >
          {item.icon ? (
            <div className="flex items-center justify-center h-1/2 w-1/2 byn-btn-ct">
              {item.icon}
            </div>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  );
};

export default Footer;
