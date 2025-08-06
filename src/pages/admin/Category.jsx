import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Space, Popconfirm, message } from "antd";
import {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "../../redux/services/categoryApi";

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [form] = Form.useForm();

  const showModal = () => {
    form.resetFields();
    setIsEdit(false);
    setEditingCategory(null);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
  };

  const handleFinish = async (values) => {
    try {
      if (isEdit) {
        await updateCategory({ id: editingCategory._id, updatedData: values });
        message.success("Category updated successfully!");
      } else {
        await createCategory(values);
        message.success("Category created successfully!");
      }
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error("An error occurred while saving the category.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      message.success("Category deleted successfully!");
    } catch (error) {
      message.error("An error occurred while deleting the category.");
    }
  };

  const handleEdit = (record) => {
    setIsEdit(true);
    setEditingCategory(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this category?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <section className="py-4 ">


        <div className="container">
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Category Management</h2>
        <Button type="primary" onClick={showModal}>
          Add Category
        </Button>
      </div>
      <Table
        dataSource={categories}
        columns={columns}
        rowKey={(record) => record._id}
        loading={isLoading}
      />
      <Modal
        title={isEdit ? "Edit Category" : "Add Category"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="Category Name"
            name="name"
            rules={[{ required: true, message: "Please enter category name!" }]}
          >
            <Input placeholder="Enter category name" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} placeholder="Enter category description" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <Button onClick={handleCancel} className="me-2">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              {isEdit ? "Update" : "Create"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
    </div>
    </section>
  );
};

export default Category;
