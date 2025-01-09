import LoginForm from "../../Components/Form/LoginForm";
import login_img from "../../Assets/Images/login_image.jpg";
import { useState } from "react";
import RegisterForm from "../../Components/Form/RegisterForm";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const renderForm = () => {
    console.log(isOpen);
    switch (isOpen) {
      case false:
        return <RegisterForm showForm={setIsOpen} />;
      default:
        return <LoginForm showForm={setIsOpen} />;
    }
  };
  return (
    <div className="flex flex-row justify-center items-center space-x-10">
      <div className="w-1/2 ">
        <img src={login_img} />
      </div>
      <div className="w-1/2 ">{renderForm()}</div>
    </div>
  );
};

export default LoginPage;
