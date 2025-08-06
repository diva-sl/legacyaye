import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  message,
  Typography,
} from "antd";
import {
  useGetAllStudentsQuery,
  useGetStudentByIdQuery,
  useUpdateStudentMutation,
} from "../../redux/services/studentApi";

const { Title } = Typography;

const StudentManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const { data, isLoading } = useGetAllStudentsQuery({
    page: currentPage,
    limit: 10,
    search,
  });
  const { data: studentDetails, refetch } = useGetStudentByIdQuery(
    selectedStudentId,
    { skip: !selectedStudentId }
  );
  const [updateStudent] = useUpdateStudentMutation();

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1); // Reset to the first page
  };

  const handleEdit = (id) => {
    setSelectedStudentId(id);
    refetch(); // Fetch the student details
    setIsModalOpen(true);
  };

  const handleUpdate = async (values) => {
    try {
      await updateStudent({ id: selectedStudentId, updatedData: values });
      message.success("Student details updated successfully!");
      setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to update student details!");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            onClick={() => handleEdit(record._id)}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={3}>Student Management</Title>
      <Input.Search
        placeholder="Search students"
        enterButton="Search"
        onSearch={handleSearch}
        style={{ marginBottom: "20px", width: "50%" }}
      />
      <Table
        dataSource={data?.students || []}
        columns={columns}
        loading={isLoading}
        rowKey="_id"
        pagination={{
          current: currentPage,
          pageSize: 10,
          total: data?.totalStudents || 0,
          onChange: (page) => setCurrentPage(page),
        }}
      />

      <Modal
        title="Edit Student Details"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              handleUpdate(values);
              form.resetFields();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          initialValues={studentDetails}
          layout="vertical"
          name="edit_student"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter the email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StudentManagement;
