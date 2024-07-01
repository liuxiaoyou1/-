"use client";
import { useRouter } from "next/navigation";
import "./index.css";
import RouteCinfig from '@/app/utils/route/config'

interface INavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}
const Footer = () => {
  const router = useRouter();

  const navItems = [
    { label: "首页", href: RouteCinfig.HomeRoute},
    { label: "商城", href: RouteCinfig.ShopRoute },
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
      href: "/add",
    },
    { label: "消息", href: RouteCinfig.MsgRoute },
    { label: "我", href: RouteCinfig.MeRoute },
  ];

  const handleNavItemClick = (item: INavItem) => {
    router.push(item.href);
  };
  return (
    <ul className="fixed dyn-footer text-[16rem]">
      {navItems.map((item, index) => (
        <li
          className="flex flex-auto items-center justify-center h-full"
          key={index}
          onClick={() => handleNavItemClick(item)}
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
