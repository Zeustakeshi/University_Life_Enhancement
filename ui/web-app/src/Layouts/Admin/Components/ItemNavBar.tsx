import React from "react";
import { Link } from "react-router-dom";

interface ItemNavBarProps {
  content: string;
  icon?: React.ReactNode;
  href?: string; // Đường dẫn của menu cha
  submenu?: ItemNavBarProps[] | null; // Danh sách submenu
  isOpen?: boolean; // Trạng thái mở của submenu
  onClick?: () => void; // Sự kiện khi click vào menu cha
}

const ItemNavBar: React.FC<ItemNavBarProps> = ({
  content,
  icon,
  href,
  submenu,
  isOpen,
  onClick,
}) => {
  const defaultHref = "/admin/"; // Đường dẫn mặc định khi href là ""
  return (
    <div className="relative">
      {/* Menu Cha */}
      <div
        onClick={onClick}
        className={`flex items-center justify-between py-3 px-2 rounded-lg hover:bg-orange-700 transition duration-150 ease-linear ${
          submenu ? "cursor-pointer" : ""
        }`}
      >
        <Link
          to={submenu ? "#" : href || defaultHref} // Sử dụng đường dẫn mặc định nếu href là chuỗi rỗng
          className="flex items-center gap-3"
        >
          {icon && <div>{icon}</div>}
          <p className="font-bold text-black lg:text-sm group-hover:text-white">
            {content}
          </p>
        </Link>
        {submenu && (
          <span className="text-black group-hover:text-white ml-auto">
            {isOpen ? "▲" : "▼"}
          </span>
        )}
      </div>

      {/* Submenu */}
      {submenu && isOpen && (
        <div className="ml-6 mt-2 space-y-1">
          {submenu.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href || defaultHref} // Đường dẫn mặc định cho submenu nếu thiếu href
              className="block px-2 py-3 font-semibold text-sm text-black rounded-lg hover:bg-orange-700 transition duration-150 ease-linear"
            >
              {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
              {subItem.content}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemNavBar;