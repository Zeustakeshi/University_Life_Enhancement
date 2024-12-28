import { useState } from "react";
import Logo from "../../../Assets/Images/logo.png";
import {
  IcAccount,
  IcBellOuline,
  IcChat,
  IcEdit,
  IcNotification,
} from "../../../Common/Icons/Icons";

const Header = () => {
  const [ckAccount, setCkAccount] = useState<boolean>(false);

  return (
    <>
      <header>
        <div className="bg-oranges-orange2 w-full h-[30px] flex justify-between items-center text-xs">
          <div className="flex gap-5 px-5">
            <a href="#" className="ml-5 hover:text-white">
              Nhà trọ tốt
            </a>
            <a href="#" className="hover:text-white">
              Việc làm tốt
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">
              Đóng góp ý kiến
            </a>
            <a href="#" className="hover:text-white">
              Trợ giúp
            </a>
            <div className="relative inline-block">
              <select
                className="block w-[150px] rounded-md h-7 bg-yellow-500 text-sm font-medium text-white shadow-sm focus:outline-none"
                aria-label="Dành cho người bán"
              >
                <option className="text-gray-700">Quản lý tin</option>
                <option className="text-gray-700">Gói Pro</option>
                <option className="text-gray-700">Dành cho Đối tác</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-oranges-orange2 h-16 flex items-center gap-5">
          <img src={Logo} className="w-50 h-10 px-7" />
          <div>Danh mục</div>
          <div>
            <div className="flex items-center justify-center">
              <div className="flex w-[550px] mx-10 rounded bg-white">
                <input
                  className="w-full border-none bg-transparent px-3 py-1 text-gray-400 outline-none focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="m-2 rounded bg-yellow-500 px-2 py-2 text-white"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    width="30px"
                    height="10px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <IcBellOuline />
          </div>
          <div>
            <IcChat />
          </div>
          <div className="flex gap-3 justify-center items-center">
            <IcNotification />
            Quản lý tin
          </div>
          <button
            onClick={() => {
              setCkAccount(!ckAccount);
            }}
            className="flex gap-3 justify-center items-center"
          >
            <IcAccount />
            Tài khoản
          </button>
          <button className="gap-3 px-5 flex justify-center items-center bg-white h-8 w-50 rounded">
            <IcEdit />
            Đăng tin
          </button>
        </div>
      </header>
      {ckAccount && (
        <div
          className={`absolute right-[150px] shadow-md mt-[1%] flex-col justify-center items-center`}
        >
          <div className="px-8 py-2 text-left">
            <button
              onClick={() => {
                alert("hi");
              }}
            >
              Đăng nhập/ đăng ký
            </button>
          </div>
          <div className="px-8 py-2 text-left">
            <p>Quản lý đơn hàng</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
