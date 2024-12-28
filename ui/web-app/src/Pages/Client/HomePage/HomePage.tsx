import CardProduct from "../../../Components/Card/CardProduct";

const HomePage = () => {
  return (
    <div>
      <div>HomePage</div>
      <div className="flex flex-row w-full justify-between items-center">
        <CardProduct type={0}/>
        <CardProduct type={1}/>
        <CardProduct type={2}/>
      </div>
    </div>
  );
};

export default HomePage;
