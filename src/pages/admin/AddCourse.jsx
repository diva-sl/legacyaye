import React, { useState } from "react";
import { Form, Input, Select, Button, message } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useCreateCourseMutation } from "../../redux/services/courseApi";
import { useGetAllCategoriesQuery } from "../../redux/services/categoryApi";

const { Option } = Select;

const AddCourse = () => {
  const [form] = Form.useForm();
  const [createCourse] = useCreateCourseMutation();
  const { data: categories, isLoading: isCategoriesLoading } = useGetAllCategoriesQuery();
  const [description, setDescription] = useState(""); // State for text editor

  const handleSubmit = async (values) => {
    try {
      const response = await createCourse({ ...values, description }).unwrap();
      message.success("Course created successfully!");
      console.log("Course Created:", response);
      form.resetFields(); // Reset form after successful submission
      setDescription(""); // Reset text editor
    } catch (error) {
      console.error("Error creating course:", error);
      message.error(error?.data?.message || "Failed to create course. Please try again.");
    }
  };

  const handleDescriptionChange = (value) => {
    setDescription(value); // Update state with editor content
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Add New Course</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          level: "beginner",
        }}
      >
        {/* Course Title */}
        <Form.Item
          label="Course Title"
          name="title"
          rules={[{ required: true, message: "Course title is required" }]}
        >
          <Input placeholder="Enter course title" />
        </Form.Item>

        {/* Course Category */}
        <Form.Item
          label="Course Category"
          name="category"
          rules={[{ required: true, message: "Course category is required" }]}
        >
          <Select placeholder="Select a category" loading={isCategoriesLoading}>
            {categories?.map((category) => (
              <Option key={category._id} value={category._id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Course Level */}
        <Form.Item
          label="Course Level"
          name="level"
          rules={[{ required: true, message: "Course level is required" }]}
        >
          <Select placeholder="Select course level">
            <Option value="beginner">Beginner</Option>
            <Option value="intermediate">Intermediate</Option>
            <Option value="advanced">Advanced</Option>
          </Select>
        </Form.Item>

        {/* Course Price */}
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Price is required" }]}
        >
          <Input type="number" placeholder="Enter course price" />
        </Form.Item>

        {/* Offer Price */}
        <Form.Item
          label="Offer Price"
          name="offerPrice"
          rules={[
            { required: true, message: "Offer price is required" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || value <= getFieldValue("price")) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Offer price cannot be greater than the original price")
                );
              },
            }),
          ]}
        >
          <Input type="number" placeholder="Enter offer price" />
        </Form.Item>

        {/* Course Description */}
        <Form.Item
          label="Course Description"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <ReactQuill
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter course description"
            theme="snow"
          />
        </Form.Item>

        {/* Course Duration */}
        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true, message: "Course duration is required" }]}
        >
          <Input placeholder="Enter course duration (e.g., 10h 20m)" />
        </Form.Item>

        {/* Number of Lessons */}
        <Form.Item
          label="Lessons"
          name="lessons"
          rules={[{ required: true, message: "Number of lessons is required" }]}
        >
          <Input type="number" placeholder="Enter number of lessons" />
        </Form.Item>

        {/* Certifications */}
        <Form.Item
          label="Certifications"
          name="certifications"
          rules={[{ required: true, message: "Certification status is required" }]}
        >
          <Select placeholder="Select certification status">
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Form.Item>

        {/* Graduation */}
        <Form.Item
          label="Graduation"
          name="graduation"
          rules={[{ required: true, message: "Graduation requirement is required" }]}
        >
          <Input placeholder="Enter graduation requirement (e.g., 25K)" />
        </Form.Item>

        {/* Submit Button */}
        <Button type="primary" htmlType="submit">
          Add Course
        </Button>
      </Form>
    </div>
  );
};

export default AddCourse;
