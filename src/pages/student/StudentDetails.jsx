import React, { useState, useEffect } from "react";
import { Card, Form, Input, Button, message, Typography, Divider } from "antd";
import {
  useGetStudentByIdQuery,
  useUpdateStudentMutation,
} from "../../redux/services/studentApi";

const { Title } = Typography;

const StudentDetails = ({ studentId }) => {
  const [form] = Form.useForm();
  const [studentData, setStudentData] = useState(null);

  // Fetch student information by ID
  const { data, isLoading, refetch } = useGetStudentByIdQuery(studentId, {
    skip: !studentId,
  });

  // Update mutation
  const [updateStudent] = useUpdateStudentMutation();

  useEffect(() => {
    if (data) {
      setStudentData(data);
      form.setFieldsValue(data); // Set form fields with fetched data
    }
  }, [data, form]);

  const handleUpdate = async (values) => {
    try {
      await updateStudent({ id: studentId, updatedData: values });
      message.success("Student information updated successfully!");
      refetch(); // Refetch data after update
    } catch (error) {
      message.error("Failed to update student information.");
    }
  };

  if (isLoading || !studentData) {
    return <p>Loading student details...</p>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Title level={3}>Student Information</Title>
      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdate}
          initialValues={studentData}
        >
          <Form.Item
            name="name"
            label="Student Name"
            rules={[{ required: true, message: "Please enter the student name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Please enter the email address" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="course"
            label="Enrolled Course"
            rules={[{ required: true, message: "Please enter the course name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="paymentStatus"
            label="Payment Status"
            rules={[{ required: true, message: "Please enter payment status" }]}
          >
            <Input placeholder="e.g., Paid, Pending, Partial" />
          </Form.Item>

          <Form.Item
            name="additionalInfo"
            label="Additional Information"
          >
            <Input.TextArea rows={4} placeholder="Enter any additional details" />
          </Form.Item>

          <Divider />

          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Update Student Information
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default StudentDetails;
