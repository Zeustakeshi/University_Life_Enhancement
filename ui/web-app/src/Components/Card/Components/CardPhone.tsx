import { formatPrice } from "../../../Utils/formatPrice";
import { shortenText } from "../../../Utils/shortenText";

interface Cardprops {
  title: string;
  price: number;
  time_up: number;
  address: string;
}

const CardPhone: React.FC<Cardprops> = ({ title, price, time_up, address }) => {
  return (
    <div className="relative">
      <p className="font-bold">{shortenText(title, 4)}</p>
      <span className="text-red-600 font-bold">{formatPrice(price)}</span>
      <p className="text-xs text-gray-500 mt-5">
        {time_up} giây trước, {address}
      </p>
    </div>
  );
};

export default CardPhone;
