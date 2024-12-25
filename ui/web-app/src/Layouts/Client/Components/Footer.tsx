import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8 border-t border-gray-200">
      {/* Main Content */}
      <div className="w-full mx-auto max-w-6xl flex flex-wrap justify-between items-start space-y-8 md:space-y-0 md:flex-nowrap">
        {/* 1 */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold mb-4">TẢI ỨNG DỤNG ABC</h3>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div>
              <img
                src="https://picsum.photos/200/200"
                alt="QR Code"
                className="w-24 h-24 bg-gray-200 mx-auto md:mx-0"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <button className="bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300">
                Download on the App Store
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300">
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold mb-4">HỖ TRỢ KHÁCH HÀNG</h3>
          <ul className="space-y-2">
            <li>
              <Link to={""} className="hover:text-blue-500">
                Trung tâm trợ giúp
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:text-blue-500">
                An toàn mua bán
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:text-blue-500">
                Liên hệ hỗ trợ
              </Link>
            </li>
          </ul>
        </div>
        {/* 3 */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold mb-4">VỀ CTY ABC</h3>
          <ul className="space-y-2">
            <li>
              <Link to={""} className="hover:text-blue-500">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:text-blue-500">
                Quy chế hoạt động sàn
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:text-blue-500">
                Chính sách bảo mật
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:text-blue-500">
                Giải quyết tranh chấp
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:text-blue-500">
                Tuyển dụng
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:text-blue-500">
                Truyền thông
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:text-blue-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        {/* 4 */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold mb-4">LIÊN KẾT</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
          <div className="mt-4">
            <img
              src="https://picsum.photos/150/50"
              alt="Chứng nhận"
              className="w-32 h-12 bg-gray-200 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs text-gray-400">
        <p>CÔNG TY TNHH ABC</p>
      </div>
    </footer>
  );
};

export default Footer;
