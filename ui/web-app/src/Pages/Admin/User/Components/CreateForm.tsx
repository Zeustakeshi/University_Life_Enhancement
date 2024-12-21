import { User } from "../../../../Types/user";
import { Button, Input, notification } from "antd";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface CreateFormFields extends User { }

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  fullName: "",
  studentId: "",
  email: "",
  avatar: "https://picsum.photos/200/200",
  major: "",
};

const CreateForm: React.FC<CreateEditArticleFormProps> = ({
  initForm,
}) => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  useEffect(() => {
    if (initForm?.userId) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm]);

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // await updateArticle({ _id: initForm._id }, data).then(() => {
        //   notification.success({
        //     message: "Cập nhật thành công",
        //   });
        //   reset();
        // });
        // return;
      }

      // await createArticle(data).then(() => {
      //   notification.success({
      //     message: "Thêm thành công",
      //   });
      //   reset();
      // });
    } catch (err) {
      notification.error({
        message: "Có lỗi xảy ra vui lòng kiểm tra lại",
      });
    }
  };

  return (
    <form action="POST" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-[16px] text-[grey]">Họ và tên</p>
        <Controller
          name="fullName"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập họ và tên" {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.fullName?.type === "required" && "Vui lòng nhâp họ và tên"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Họ và tên</p>
        <Controller
          name="studentId"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập mã sinh viên" {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.fullName?.type === "required" && "Vui lòng nhâp mã sinh viên"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Email</p>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập họ và tên" {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.fullName?.type === "required" && "Vui lòng nhâp họ và tênn"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Ngành học</p>
        <Controller
          name="major"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập họ và tên" {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.fullName?.type === "required" && "Vui lòng nhâp họ và tên"}
        </p>
      </div>
      <Button
        className="bg-blue-600 text-secondary font-semibold text-md py-3 hover:!bg-blue-600 hover:!text-white hover:!border-blue-600 shadow-sm shadow-blue-100 hover:!shadow-md hover:!shadow-blue-100 ml-auto"
        htmlType="submit"
      >
        {initForm ? "Cập nhật" : "Tạo"}
      </Button>
    </form>
  );
};

export default CreateForm;