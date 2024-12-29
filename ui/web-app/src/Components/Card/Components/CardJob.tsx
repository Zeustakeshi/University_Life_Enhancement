import {
  IcCompany,
  IcHeartOutlineJob,
  IcLocation,
} from "../../../Common/Icons/Icons";

interface Cardprops {
  name_job: string;
  salary_job: string;
  name_company: string;
  address: string;
}

const CardJob: React.FC<Cardprops> = ({
  name_job,
  salary_job,
  name_company,
  address,
}) => {
  return (
    <div className="relative bg-white border rounded-md w-72 p-4 shadow hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="bg-oranges-orange2 text-white text-xxs font-bold px-2 py-1 rounded-md">
          ĐỐI TÁC
        </div>
        <div className="text-sm font-semibold text-gray-800 truncate">
          {name_job}
        </div>
      </div>
      <div className="flex items-start gap-3 mt-4">
        <img
          src="https://picsum.photos/100/100"
          alt="Job Image"
          className="w-20 h-20 rounded-md object-cover"
        />
        <div className="flex-1">
          <p className="text-red-500 text-sm truncate">{salary_job}</p>
          <div className="flex items-center gap-1">
            <span>
              <IcCompany />
            </span>
            <p className="text-gray-600 text-xs truncate">{name_company}</p>
          </div>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            <span>
              <IcLocation />
            </span>{" "}
            {address}
          </p>
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <button className="text-red hover:text-red-500">
          <IcHeartOutlineJob />
        </button>
      </div>
    </div>
  );
};

export default CardJob;
