import React from "react";
import { Descriptions, Table, Tag, Button, message } from "antd";
import { useGetDetailedStudentInfoQuery, useUpdatePaymentInfoMutation } from "../../../redux/services/studentApi";
import { useParams } from "react-router-dom";

const StudentView = () => {
  const { id } = useParams();
  const { data: studentData, isLoading } = useGetDetailedStudentInfoQuery(id);
  const [updatePaymentInfo] = useUpdatePaymentInfoMutation();

  const handlePaymentUpdate = async (courseId, isFullyPaid) => {
    try {
      await updatePaymentInfo({ studentId: id, courseId, paymentData: { isFullyPaid } }).unwrap();
      message.success("Payment updated successfully!");
    } catch (error) {
      message.error("Failed to update payment.");
    }
  };

  const courseColumns = [
    {
      title: "Course",
      dataIndex: "title",
      key: "title",
      render: (_, record) => record.course.title,
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (progress) => `${progress}%`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={status === "completed" ? "green" : "blue"}>{status.toUpperCase()}</Tag>,
    },
    {
      title: "Payment",
      key: "payment",
      render: (_, record) => (
        <Button
          type={record.payment.isFullyPaid ? "default" : "primary"}
          onClick={() => handlePaymentUpdate(record.course._id, !record.payment.isFullyPaid)}
        >
          {record.payment.isFullyPaid ? "Mark Partial" : "Mark Paid"}
        </Button>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Details</h2>

      <Descriptions bordered>
        <Descriptions.Item label="Name">{studentData?.student?.name}</Descriptions.Item>
        <Descriptions.Item label="Email">{studentData?.student?.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{studentData?.student?.phone}</Descriptions.Item>
        <Descriptions.Item label="Address">
          {studentData?.student?.address?.street}, {studentData?.student?.address?.city},{" "}
          {studentData?.student?.address?.state}, {studentData?.student?.address?.country}
        </Descriptions.Item>
        <Descriptions.Item label="DOB">{studentData?.student?.dob}</Descriptions.Item>
        <Descriptions.Item label="Bio">{studentData?.student?.bio}</Descriptions.Item>
      </Descriptions>

      <h3 style={{ marginTop: "20px" }}>Enrolled Courses</h3>
      <Table
        columns={courseColumns}
        dataSource={studentData?.student?.enrolledCourses?.map((course) => ({
          ...course,
          key: course.course._id,
        }))}
        pagination={false}
      />
    </div>
  );
};

export default StudentView;
