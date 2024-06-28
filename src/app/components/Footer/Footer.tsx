import "./index.css";
const Footer = () => {
  return (
    <ul className="fixed dyn-footer text-[16rem]">
      <li className="flex flex-auto items-center justify-center h-full">
        首页
      </li>
      <li className="flex flex-auto items-center justify-center h-full">
        商城
      </li>
      <li className="flex flex-auto items-center justify-center h-full">
        <div className="flex items-center justify-center h-1/2 w-1/2 byn-btn-ct">
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
        </div>
      </li>
      <li className="flex flex-auto items-center justify-center h-full">
        消息
      </li>
      <li className="flex flex-auto items-center justify-center h-full">我</li>
    </ul>
  );
};

export default Footer;
