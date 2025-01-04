const categories = [
  { name: "Bất động sản", imgSrc: "https://picsum.photos/200/200" },
  { name: "Xe cộ", imgSrc: "https://picsum.photos/200/200" },
  { name: "Đồ điện tử", imgSrc: "https://picsum.photos/200/200" },
  {
    name: "Đồ gia dụng, nội thất, cây cảnh",
    imgSrc: "https://picsum.photos/200/200",
  },
  {
    name: "Giải trí, Thể thao, Sở thích",
    imgSrc: "https://picsum.photos/200/200",
  },
  { name: "Mẹ và bé", imgSrc: "https://picsum.photos/200/200" },
  { name: "Dịch vụ, Du lịch", imgSrc: "https://picsum.photos/200/200" },
  { name: "Việc làm", imgSrc: "https://picsum.photos/200/200" },
  { name: "Thú cưng", imgSrc: "https://picsum.photos/200/200" },
  {
    name: "Đồ ăn, thực phẩm và các loại khác",
    imgSrc: "https://picsum.photos/200/200",
  },
  {
    name: "Tủ lạnh, máy lạnh, máy giặt",
    imgSrc: "https://picsum.photos/200/200",
  },
  {
    name: "Thời trang, Đồ dùng cá nhân",
    imgSrc: "https://picsum.photos/200/200",
  },
  {
    name: "Đồ dùng văn phòng, công cụ",
    imgSrc: "https://picsum.photos/200/200",
  },
  { name: "Cho tặng miễn phí", imgSrc: "https://picsum.photos/200/200" },
];

const Category = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-neutrals-white shadow-lg">
      <div className="p-4 w-full mx-auto">
        <h2 className="text-lg font-semibold mb-4">Khám phá danh mục</h2>
        <div className="grid grid-cols-7 gap-x-2 gap-y-3 w-full max-h-[250px] overflow-hidden">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-14 h-14 bg-gray-200 rounded-lg mb-1"
                src={category.imgSrc}
                alt={category.name}
              />
              <p className="text-sm text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
