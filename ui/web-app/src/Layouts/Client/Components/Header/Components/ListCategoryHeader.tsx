import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IcArrow_Down, IcArrow_Right, IcBar } from "../../../../../Common/Icons/Icons";

interface MenuItem {
  id: string;
  title: string;
  path: string;
  subMenu?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    id: "real-estate",
    title: "Bất động sản",
    path: "/real-estate",
    subMenu: [
      { id: "buy-sell", title: "Mua bán", path: "/real-estate/buy-sell" },
      { id: "rent", title: "Cho thuê", path: "/real-estate/rent" },
      { id: "projects", title: "Dự án", path: "/real-estate/projects" },
    ],
  },
  {
    id: "vehicles",
    title: "Xe cộ",
    path: "/vehicles",
    subMenu: [
      { id: "cars", title: "Ô tô", path: "/vehicles/cars" },
      { id: "motorbikes", title: "Xe máy", path: "/vehicles/motorbikes" },
      { id: "bicycles", title: "Xe đạp", path: "/vehicles/bicycles" },
    ],
  },
  {
    id: "electronics",
    title: "Đồ điện tử",
    path: "/electronics",
  },
];

const ListCategoryHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnterMenu = (id: string) => {
    setHoveredMenu(id);
  };

  const handleMouseLeaveMenu = () => {
    setHoveredMenu(null);
  };

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row justify-center items-center">
        <IcBar width="1.5em" height="1.5em" />
        <button
          className=" text-neutrals-black px-4 py-2"
          onClick={handleClickButton}
          ref={buttonRef}
        >
          Danh mục
        </button>
        <IcArrow_Down width="1.5em" height="1.5em" />
      </div>

      <ul className={`absolute bg-white shadow-lg mt-2 w-48 ${isMenuOpen ? "block" : "hidden"}`}>
        {menuData.map((menuItem) => (
          <li
            key={menuItem.id}
            className="relative"
            onMouseEnter={() => handleMouseEnterMenu(menuItem.id)}
            onMouseLeave={handleMouseLeaveMenu}
          >
            <Link
              to={menuItem.path}
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
            >
              {menuItem.title}
              {menuItem.subMenu && <IcArrow_Right width="1.5em" height="1.5em" />}
            </Link>

            {menuItem.subMenu && hoveredMenu === menuItem.id && (
              <ul className="absolute left-full top-0 bg-white shadow-lg mt-0 w-48">
                {menuItem.subMenu.map((subItem) => (
                  <li key={subItem.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to={subItem.path}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategoryHeader;
