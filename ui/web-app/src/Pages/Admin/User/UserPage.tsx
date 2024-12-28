import { User } from "../../../Types/user";
import { Button, DatePicker, Modal, notification, Table, TableProps } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import confirm from "antd/es/modal/confirm";
import { useEffect, useRef, useState } from "react";
import Columns from "./Components/Columns";
import CreateForm from "./Components/CreateForm";
import moment from "moment";

const UserPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | User;
  }>({
    isOpen: false,
    data: undefined,
  });

  const [users, setUsers] = useState<User[]>([
    {
      userId: "1",
      fullName: "Nguyễn Văn A",
      studentId: "B1800001",
      email: "nguyenvana@gmail.com",
      major: "CNTT",
      avatar: "https://picsum.photos/200/200",
    },
    {
      userId: "2",
      fullName: "Nguyễn Văn B",
      studentId: "B1800002",
      email: "nguyenvanb@gmail.com",
      major: "CNTT",
      avatar: "https://picsum.photos/200/200",
    },
    {
      userId: "3",
      fullName: "Nguyễn Văn C",
      studentId: "B1800003",
      email: "nguyenvanc@gmail.com",
      major: "CNTT",
      avatar: "https://picsum.photos/200/200",
    },
    {
      userId: "4",
      fullName: "Nguyễn Văn D",
      studentId: "B1800004",
      email: "nguyenvand@gmail.com",
      major: "CNTT",
      avatar: "https://picsum.photos/200/200",
    },
    {
      userId: "5",
      fullName: "Nguyễn Văn e",
      studentId: "B1800003",
      email: "nguyenvane@gmail.com",
      major: "CNTT",
      avatar: "https://picsum.photos/200/200",
    },

  ]);

  const timeoutRef = useRef(setTimeout(() => { }, 0));
  const [filters, setFilters] = useState({
    start: 0,
    end: Date.now(),
    search: "",
    pageSize: 5,
    pageNumber: 1,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (modalEdit.data) {
      setModalEdit({
        isOpen: false,
        data: undefined,
      });
      return;
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    // fetchArticles().then((res) => {
    //   setArticles(res.data.data);
    // });
  }, [filters]);

  const onChange: TableProps<User>["onChange"] = (pagination) => {
    //refetch data
    setFilters((prev) => ({
      ...prev,
      pageNumber: pagination.current ?? 1,
      pageSize: pagination.pageSize ?? 5,
    }));
  };

  const onSearch: SearchProps["onSearch"] = (value, _e) => {
    //refetch data
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search: value,
      }));
    }, 1500);
  };

  const showModalEdit = (isOpen: boolean, data: User) => {
    setModalEdit({
      isOpen,
      data,
    });
  };

  const showDeleteConfirm = (_id: string) => {
    confirm({
      title: "Bạn có chắc muốn xóa dữ liệu này?",
      content: "Bạn sẽ không thể khôi phục dữ liệu sau khi xóa!",
      okText: "Xóa luôn sợ gì",
      okType: "danger",
      maskClosable: true,
      closable: true,
      onOk() {
        // deleteArticle({ _id })
        //   .then(() => {
        //     notification.success({ message: "Xóa thành công" });
        //   })
        //   .catch(() => {
        //     notification.error({
        //       message: "Xóa thất bại ! Kiểm tra lại nha !",
        //     });
        //   });
      },
      cancelText: "Hủy",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-end my-4 space-x-2">
        <DatePicker.RangePicker
          placeholder={["", "Hôm nay"]}
          allowEmpty={[false, true]}
          onChange={(date) => {
            if (!date) return;

            if (date[0]) {
              setFilters((prev) => ({
                ...prev,
                start: moment(date[0]?.toString()).valueOf(),
              }));
            }

            if (date[1]) {
              setFilters((prev) => ({
                ...prev,
                end: moment(date[1]?.toString()).valueOf(),
              }));
            }
          }}
        />
        <Search
          placeholder="Tìm kiếm"
          allowClear
          className="w-[300px]"
          onSearch={onSearch}
        />
        <Button onClick={showModal}>Thêm mới</Button>
        <Modal
          title={modalEdit.isOpen ? "Sửa Thông tin" : "Thêm mới thông tin"}
          open={isModalOpen || modalEdit.isOpen}
          onCancel={closeModal}
          cancelButtonProps={{
            className: "hidden",
          }}
          okButtonProps={{
            className: "hidden",
          }}
        >
          <CreateForm initForm={modalEdit.data} />
        </Modal>
      </div>
      <Table
        columns={Columns(showModalEdit, showDeleteConfirm)}
        dataSource={users.map((item, index) => ({ ...item, key: index }))}
        pagination={{
          pageSize: 5,
          total: users.length,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default UserPage;