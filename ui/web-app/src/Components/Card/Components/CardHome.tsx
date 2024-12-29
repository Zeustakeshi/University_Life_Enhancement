import { IcHeartOuline } from "../../../Common/Icons/Icons";

interface Cardprops {
  name_home: string;
  description: string;
  price: number;
  area: number;
  adress: string;
  time_up: number
}

const CardHome: React.FC<Cardprops> = ({name_home, description, price, area, adress, time_up}) => {
  return (
    <div className="relative">
      <p className="font-bold">{name_home}</p>
      <p className="text-xs text-gray-600">{description}</p>
      <p>
        <span className="text-red-600 font-bold">{price} triệu/tháng</span> {area} m²
      </p>
      <div className="flex items-center justify-between">
        <p className="text-gray-700">{adress}</p>
        <div className="border rounded px-3 mt-3">
          <IcHeartOuline />
        </div>
      </div>
      <p className="text-xs text-gray-500">{time_up} giây trước</p>
    </div>
  );
};

export default CardHome;
