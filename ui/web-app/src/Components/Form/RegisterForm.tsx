import { Link } from "react-router-dom";
import { IcGoogle, IcFacebook } from "../../Common/Icons/Icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SetStateAction } from "react";

interface formProps {
  showForm: React.Dispatch<SetStateAction<boolean>>;
}

type FormData = {
  fullName: string;
  email: string;
  password: string;
  rePassword: string;
};

const RegisterForm: React.FC<formProps> = ({ showForm }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newUser: any = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      username: "",
      role: "customer",
    };
    console.log(newUser);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="flex flex-col space-y-5 p-5 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-[40px]">Welcome</h1>
        <Controller
          name="fullName"
          control={control}
          rules={{
            required: "Full name is required",
          }}
          render={({ field }) => (
            <input
              type="fullName"
              id="fullName"
              {...field}
              placeholder="NAME"
              className="p-2 w-full border rounded"
            />
          )}
        />
        {errors.fullName && (
          <span className="text-red-500">{errors.fullName.message}</span>
        )}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Data is invalid.",
            },
            minLength: {
              value: 10,
              message: "Email must contain at least 10 characters.",
            },
            maxLength: {
              value: 36,
              message: "Email must not exceed 36 characters.",
            },
          }}
          render={({ field }) => (
            <input
              type="email"
              id="email"
              {...field}
              placeholder="EMAIL"
              className="p-2 w-full border rounded"
            />
          )}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must contain at least 8 characters.",
            },
            maxLength: {
              value: 255,
              message: "Password must not exceed 255 characters.",
            },
            pattern: {
              value: /^[0-9a-zA-Z!@#$%*]+$/,
              message:
                "Password must only contain the characters 0-9, a-z, A-Z, ! @ # $ % *.",
            },
          }}
          render={({ field }) => (
            <input
              type="password"
              id="password"
              autoComplete="true"
              {...field}
              placeholder="PASSWORD"
              className="p-2 w-full border rounded"
            />
          )}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <Controller
          name="rePassword"
          control={control}
          render={({ field }) => (
            <input
              type="password"
              id="rePassword"
              autoComplete="true"
              {...field}
              placeholder="RETYPE PASSWORD"
              className="p-2 w-full border rounded"
            />
          )}
        />
        {errors.rePassword && (
          <span className="text-red-500">{errors.rePassword.message}</span>
        )}
        <div className="flex flex-row justify-center">
          <button className="bg-oranges-orange2 text-neutrals-black py-2 px-10 rounded w-fit">
            Register
          </button>
        </div>
        <p className="text-center text-[24px]">Or</p>
        <div className="flex flex-row space-x-10">
          <Link
            to={""}
            className="w-1/2 flex justify-center p-2 rounded bg-neutrals-white shadow-md"
          >
            <IcGoogle />
          </Link>
          <Link
            to={""}
            className="w-1/2 flex justify-center p-2 rounded bg-neutrals-white shadow-md"
          >
            <IcFacebook />
          </Link>
        </div>
        <div className="flex flex-row justify-center space-x-3">
          <p>Already have an account?</p>
          <button
            className="text-blues-blue2"
            onClick={() => {
              showForm(true);
            }}
          >
            Login now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
