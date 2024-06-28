"use client";
import { useRouter } from "next/navigation";
import "./index.css";

interface INavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}
const Footer = () => {
  const router = useRouter();

  const navItems = [
    { label: "首页", href: "/" },
    { label: "商城", href: "/shop/home" },
    {
      label: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-30"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      ),
      href: "/add",
    },
    { label: "消息", href: "/message/detail" },
    { label: "我", href: "/profile/detail" },
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
