import CardHome from "./Components/CardHome";
import CardPhone from "./Components/CardPhone";
import CardJob from "./Components/CardJob";

interface CardProductProps {
  type: number;
}

const CardProduct:React.FC<CardProductProps> = ({type}) => {
  const RenderContent = () => {
    switch (type) {
      case 0:
        return (
          <div className="p-3">
            <div className="flex justify-center">
              <img
                src="https://picsum.photos/200/200"
                alt="Room Image"
                className="w-full max-h-[200px] rounded"
              />
            </div>
            <CardHome
              name_home="Cho thuê phòng trọ mới xây"
              description="1 phòng ngủ"
              price={1.1}
              area={4}
              adress="Tp Thủ Dầu Một"
              time_up={12}
            />
          </div>
        );
      case 1:
        return (
          <div className="p-3">
            <div className="flex justify-center">
              <img
                src="https://picsum.photos/200/200"
                alt="image"
                className="w-full max-h-[200px] rounded"
              />
            </div>
            <CardPhone
              title="Cần bán ip 13 thường"
              price={3490000}
              time_up={12}
              address="Tp Thủ Dầu Một"
            />
          </div>
        );
      case 2:
        return (
          <CardJob
            name_company="CÔNG TY TNHH ABC"
            name_job="Dev Front-end"
            salary_job="Đến 15 triệu(có trợ cấp)"
            address="Hồ Chí Minh"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white hover:shadow-md rounded inline-block border">
      {RenderContent()}
    </div>
  );
};

export default CardProduct;
