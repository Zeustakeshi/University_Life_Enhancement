import  { useState } from "react";

const ListCategoryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState("");

  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      onMouseEnter={() => setSubMenuOpen("Danh mục")}
      onMouseLeave={() => setSubMenuOpen("")}
      className="relative w-[120px] border border-gray-300 bg-white text-sm
       text-lg px-2 py-2 font-bold rounded-lg shadow-md
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Danh Mục
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-1 left-0 w-[200px] rounded-lg p-3 bg-white shadow-lg">
          <div className="relative group">
            <a
              href=""
              className="block py-1 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
            >
              Bất động sản
            </a>
            <div
              className={`absolute left-full top-0 w-[200px] p-3 bg-white shadow-lg rounded-lg opacity-0 ${
                subMenuOpen === "Danh mục" ? "opacity-100" : ""
              } transform scale-x-0 group-hover:scale-x-100 origin-left duration-200 ease-in-out`}
            >
              <a
                href=""
                className="block py-1 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
              >
                Nhà ở
              </a>
              <a
                href=""
                className="block py-1 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
              >
                Căn hộ
              </a>
              <a
                href=""
                className="block py-1 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
              >
                Đất nền
              </a>
            </div>
          </div>
          {/* Menu con cho Xe Cộ */}
          <div className="relative group">
            <a
              href=""
              className="block py-1 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
            >
              Xe Cộ
            </a>
            <div
              className={`absolute left-full top-0 w-[200px] p-3 bg-white shadow-lg rounded-lg opacity-0 ${
                subMenuOpen === "Danh mục" ? "opacity-100" : ""
              } transform scale-x-0 group-hover:scale-x-100 origin-left duration-200 ease-in-out`}
            >
              <a
                href=""
                className="block py-1 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
              >
                Ô tô
              </a>
              <a
                href=""
                className="block py-1 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
              >
                Xe máy
              </a>
            </div>
          </div>
          {/* Mục không có menu con */}
          <a
            href=""
            className="block py-1 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
          >
            Đồ điện tử
          </a>
        </div>
      )}
    </button>
  );
};

export default ListCategoryHeader;
