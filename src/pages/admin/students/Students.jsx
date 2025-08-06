import React, { useState } from "react";
import { Table, Button, Space, message, Input, Tabs, Tag, Spin } from "antd";
import { useGetStudentsByPaymentStatusQuery, useDeleteStudentMutation } from "../../../redux/services/studentApi";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const StudentList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("none"); // Default to "all"

  const navigate = useNavigate();

  // Fetch students based on payment filter
  const { data: studentsData, isLoading, isFetching } = useGetStudentsByPaymentStatusQuery({
    page: currentPage,
    limit: pageSize,
    search: searchTerm,
    paymentStatus: paymentFilter,
  });

  const [deleteStudent] = useDeleteStudentMutation();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page after search
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id).unwrap();
      message.success("Student deleted successfully!");
    } catch (error) {
      message.error("Failed to delete student.");
    }
  };

  const handleTabChange = (key) => {
    setPaymentFilter(key);
    setCurrentPage(1); // Reset to the first page after changing tabs
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
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Payment Status",
      key: "paymentStatus",
      render: (_, record) => {
        const paymentInfo = record.enrolledCourses.map((course) =>
          course.payment.isFullyPaid
            ? { status: "full", color: "green", label: "Full Payment" }
            : course.payment.amountPaid > 0
            ? { status: "partial", color: "orange", label: "Partial Payment" }
            : { status: "none", color: "red", label: "No Payment" }
        )[0];  
        return <Tag color={paymentInfo?.color}>{paymentInfo?.label}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => navigate(`/admin/students/${record._id}`)}>
            View
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student List</h2>

      <Input.Search
        placeholder="Search by name, email, or phone"
        onChange={handleSearch}
        style={{ width: 300, marginBottom: "20px" }}
        allowClear
      />

      <Tabs defaultActiveKey="all" onChange={handleTabChange}>
        {/* <TabPane tab="All Students" key="all">
          {isFetching ? (
            <Spin tip="Loading students..." />
          ) : (
            <Table
              columns={columns}
              dataSource={studentsData?.students?.map((student) => ({ ...student, key: student._id }))}
              loading={isLoading}
              pagination={{
                current: currentPage,
                pageSize,
                total: studentsData?.totalStudents || 0,
                onChange: (page, pageSize) => {
                  setCurrentPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
          )}
        </TabPane> */}
        <TabPane tab="Full Payment" key="full">
          {isFetching ? (
            <Spin tip="Loading students..." />
          ) : (
            <Table
              columns={columns}
              dataSource={studentsData?.students?.map((student) => ({ ...student, key: student._id }))}
              loading={isLoading}
              pagination={{
                current: currentPage,
                pageSize,
                total: studentsData?.totalStudents || 0,
                onChange: (page, pageSize) => {
                  setCurrentPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
          )}
        </TabPane>
        <TabPane tab="Partial Payment" key="partial">
          {isFetching ? (
            <Spin tip="Loading students..." />
          ) : (
            <Table
              columns={columns}
              dataSource={studentsData?.students?.map((student) => ({ ...student, key: student._id }))}
              loading={isLoading}
              pagination={{
                current: currentPage,
                pageSize,
                total: studentsData?.totalStudents || 0,
                onChange: (page, pageSize) => {
                  setCurrentPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
          )}
        </TabPane>
        <TabPane tab="No Payment" key="none">
          {isFetching ? (
            <Spin tip="Loading students..." />
          ) : (
            <Table
              columns={columns}
              dataSource={studentsData?.students?.map((student) => ({ ...student, key: student._id }))}
              loading={isLoading}
              pagination={{
                current: currentPage,
                pageSize,
                total: studentsData?.totalStudents || 0,
                onChange: (page, pageSize) => {
                  setCurrentPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default StudentList;
