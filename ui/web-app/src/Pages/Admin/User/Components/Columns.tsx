import { User } from "../../../../Types/user";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: User) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<User> => [
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      //filter
      filters: [
        {
          text: "Nguyễn Văn A",
          value: "Nguyễn Văn A",
        }
      ],
      filterMode: "tree",
      filterSearch: true,
      width: "16.67%",
      align: "center",
      onFilter: (value, record) => record.fullName.startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
      //render
      render(value, record) {
        return (
          <Link to={`/profile/${record.userId}`} className="underline text-center">
            {value}
          </Link>
        );
      },
    },
    {
      title: "Mã số sinh viên",
      dataIndex: "studentId",
      align: "center",
      render: (value) => {
        return (
          <p className="text-center">
            {value}
          </p>
        );
      },
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return (
          <div className="w-full">
            <img
              src={value}
              alt="articles"
              className="max-h-[150px] w-full object-cover"
            />
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "16.67%",
      align: "center",
      render(value) {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Ngành học",
      dataIndex: "major",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      align: "center",
      render(_, record) {
        return (
          <div className="flex flex-row justify-center space-x-3">
            <Button
              onClick={() => {
                showModalEdit(true, record);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                showDeleteConfirm(record.userId);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

export default Columns;